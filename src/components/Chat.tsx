import React, { useState, useEffect, useRef } from 'react';
import firebase from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import Imgix from 'react-imgix';

import { Box, Text, Flex, HStack } from '@chakra-ui/react';

import { useGetChatUserLazyQuery } from '@generated/graphql';

import { auth, db } from '@config/firebase';

import ChatForm from '@components/Forms/ChatForm';

import { TChat, TMessage, TChatUserDetails } from '@customTypes/components';

const Chat: React.FC<TChat> = ({ eventId }) => {
  const [user] = useAuthState(auth);
  const [userDetails, setUserDetails] = useState<TChatUserDetails>(null);
  const [messages, setMessages] = useState<TMessage[]>([]);
  const messagesRef = useRef<HTMLDivElement>(null);
  let watchChat: () => void;

  const [getChatUser, { data: chatUserData }] = useGetChatUserLazyQuery();

  // Send message
  const sendMessage = (text: string) => {
    if (chatUserData) {
      db.collection('LiveChat').doc(eventId).collection('Messages').add({
        text: text,
        user: userDetails,
        createdOn: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
  };

  // Watch for profile data
  useEffect(() => {
    if (chatUserData) {
      setUserDetails({
        id: user?.uid,
        image: chatUserData.Users_by_pk?.image || '',
        username:
          chatUserData.Users_by_pk?.username &&
          chatUserData.Users_by_pk?.username !== ''
            ? chatUserData.Users_by_pk?.username
            : `${chatUserData.Users_by_pk?.first_name} ${chatUserData.Users_by_pk?.last_name}`,
      });
    }
  }, [chatUserData]);

  // Watch for user and eventId changes
  useEffect(() => {
    if (user) {
      getChatUser({ variables: { id: user.uid } });
    }

    if (user && eventId) {
      watchChat = db
        .collection('LiveChat')
        .doc(eventId)
        .collection('Messages')
        .orderBy('createdOn', 'desc')
        .limit(30)
        .onSnapshot((querySnapshot) => {
          const messages: TMessage[] = [];

          querySnapshot.forEach((item) => {
            const message = item.data();

            messages.push({
              user_id: message.user.id,
              image: message.user.image,
              text: message.text,
              username: message.user.username,
            });
          });

          setMessages(messages.reverse());

          if (messagesRef.current) {
            messagesRef.current.scrollTop = messagesRef.current?.scrollHeight;
          }
        });
    }

    return () => {
      if (watchChat) {
        watchChat();
      }
    };
  }, [user, eventId]);

  return (
    <Box
      backgroundColor="white"
      borderRadius={15}
      overflow="hidden"
      boxShadow="0px 0px 4px rgba(0,0,0,0.1)"
    >
      <Flex
        ref={messagesRef}
        flexDirection="column"
        p={4}
        height="calc(100vh - 260px)"
        overflow="auto"
        backgroundColor="white"
      >
        {messages.map((message, idx) => (
          <HStack
            key={`chat-${eventId}-${user?.uid}-${idx}`}
            mb={2}
            alignItems="flex-start"
            maxWidth="80%"
            minWidth="55%"
            padding="6px 12px 6px 6px"
            backgroundColor="gray.200"
            borderRadius="5px"
            alignSelf={
              message.user_id === user?.uid ? 'flex-start' : 'flex-end'
            }
          >
            {message.image ? (
              <Box
                borderRadius={6}
                overflow="hidden"
                width="40px"
                height="40px"
              >
                <Imgix
                  src={`${process.env.NEXT_PUBLIC_IMG_URL}${message.image}`}
                  width={40}
                  height={40}
                  imgixParams={{ fit: 'crop' }}
                />
              </Box>
            ) : (
              <Box
                borderRadius={6}
                width="40px"
                height="40px"
                background="grey"
              ></Box>
            )}
            <Box flex="1">
              <Text mb={1} fontWeight="bold">
                {message.username}
              </Text>
              <Text mb={0}>{message.text}</Text>
            </Box>
          </HStack>
        ))}
      </Flex>
      <Box background="white" p={2} borderTop="1px solid rgba(0,0,0,0.1)">
        <ChatForm
          callback={(text) => {
            sendMessage(text);
          }}
        />
      </Box>
    </Box>
  );
};

export default Chat;
