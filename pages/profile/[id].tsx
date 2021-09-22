import React, { useState, useEffect } from 'react';
import Imgix from 'react-imgix';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';

import { Heading, Box, Text, HStack, Button, Divider } from '@chakra-ui/react';

import { useGetBreakerProfileLazyQuery } from '@generated/graphql';

import { auth } from '@config/firebase';

import Layout from '@layouts';
import SEO from '@components/SEO';
import FormModal from '@components/Modals/FormModal';
import AddBreakerProfileForm from '@components/Forms/AddBreakerProfileForm';

const ProfilePage: React.FC = () => {
  const router = useRouter();
  const { id: userId } = router.query;
  const [user, userLoading] = useAuthState(auth);
  const [isUserProfile, setIsUserProfile] = useState(false);
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);

  const [
    getProfile,
    { loading: profileLoading, data: profileData },
  ] = useGetBreakerProfileLazyQuery();

  useEffect(() => {
    if (user && userId) {
      getProfile({
        variables: { id: typeof userId === 'string' ? userId : '' },
      });
    }

    if (user && user.uid === userId) {
      setIsUserProfile(true);
    } else {
      setIsUserProfile(false);
    }
  }, [user]);

  return (
    <>
      <SEO title="Products" />
      <Layout pageNav="products">
        <Box flex={1} pt={8}>
          <Heading as="h1" size="lg" mb={8}>
            Profile
          </Heading>

          {profileData && (
            <Box
              mb={12}
              p={8}
              backgroundColor="white"
              borderRadius={15}
              boxShadow="0px 0px 4px rgba(0,0,0,0.1)"
            >
              <HStack spacing={10} mb={7} align="flex-start">
                {profileData.Users_by_pk?.image && (
                  <Imgix
                    src={`${process.env.NEXT_PUBLIC_IMG_URL}${profileData.Users_by_pk?.image}`}
                    width={385}
                    height={385}
                    imgixParams={{ fit: 'clamp' }}
                  />
                )}
                <Box flex="1" maxWidth={700}>
                  {isUserProfile && (
                    <Box mb={7}>
                      <Button
                        colorScheme="green"
                        size="sm"
                        onClick={() => {
                          setProfileModalOpen(true);
                        }}
                      >
                        Edit
                      </Button>
                    </Box>
                  )}

                  <Box mb={7}>
                    <Heading as="h3" size="sm" mb={1}>
                      Name:
                    </Heading>
                    <Text
                      mb={7}
                    >{`${profileData.Users_by_pk?.first_name} ${profileData.Users_by_pk?.last_name}`}</Text>

                    <Divider />
                  </Box>

                  {profileData.BreakerProfiles.length > 0 && (
                    <Box mb={7}>
                      <Heading as="h3" size="md" mb={5}>
                        Breaker Profile
                      </Heading>

                      {profileData.BreakerProfiles[0].bio && (
                        <Box mb={7}>
                          <Heading as="h3" size="sm" mb={1}>
                            Bio:
                          </Heading>
                          <Text>{profileData.BreakerProfiles[0].bio}</Text>
                        </Box>
                      )}

                      <Box mb={7}>
                        <Heading as="h3" size="sm" mb={1}>
                          Video:
                        </Heading>
                        <Text>{profileData.BreakerProfiles[0].video}</Text>
                      </Box>

                      {profileData.BreakerProfiles[0].instagram && (
                        <Box mb={7}>
                          <Heading as="h3" size="sm" mb={1}>
                            Instagram:
                          </Heading>
                          <Text>
                            {profileData.BreakerProfiles[0].instagram}
                          </Text>
                        </Box>
                      )}

                      {profileData.BreakerProfiles[0].twitter && (
                        <Box mb={7}>
                          <Heading as="h3" size="sm" mb={1}>
                            Twitter:
                          </Heading>
                          <Text>{profileData.BreakerProfiles[0].twitter}</Text>
                        </Box>
                      )}

                      {profileData.BreakerProfiles[0].facebook && (
                        <Box mb={7}>
                          <Heading as="h3" size="sm" mb={1}>
                            Facebook:
                          </Heading>
                          <Text>{`${profileData.BreakerProfiles[0].facebook}`}</Text>
                        </Box>
                      )}

                      {profileData.BreakerProfiles[0].linkedin && (
                        <Box mb={7}>
                          <Heading as="h3" size="sm" mb={1}>
                            Linkedin:
                          </Heading>
                          <Text>{profileData.BreakerProfiles[0].linkedin}</Text>
                        </Box>
                      )}

                      {profileData.BreakerProfiles[0].tiktok && (
                        <Box mb={7}>
                          <Heading as="h3" size="sm" mb={1}>
                            Tiktok:
                          </Heading>
                          <Text>{profileData.BreakerProfiles[0].tiktok}</Text>
                        </Box>
                      )}

                      <Divider />
                    </Box>
                  )}

                  {profileData.Users_by_pk?.is_breaker && (
                    <Box mb={10}>
                      <Heading as="h3" size="md" mb={5}>
                        Stream Details
                      </Heading>

                      {profileData.Users_by_pk?.Stream?.stream_key && (
                        <Box>
                          <Heading as="h3" size="sm" mb={1}>
                            Stream Key:
                          </Heading>
                          <Text wordBreak="break-all">
                            {profileData.Users_by_pk?.Stream?.stream_key}
                          </Text>
                        </Box>
                      )}

                      {profileData.Users_by_pk?.Stream?.stream_url && (
                        <Box>
                          <Heading as="h3" size="sm" mb={1}>
                            Stream URL:
                          </Heading>
                          <Text wordBreak="break-all">
                            {profileData.Users_by_pk?.Stream?.stream_url}
                          </Text>
                        </Box>
                      )}
                    </Box>
                  )}
                </Box>
              </HStack>
            </Box>
          )}
        </Box>

        {profileData && (
          <FormModal
            title="Update Profile"
            isOpen={isProfileModalOpen}
            setModalOpen={setProfileModalOpen}
          >
            <AddBreakerProfileForm
              id={typeof userId === 'string' ? userId : ''}
              profile={{
                first_name: profileData.Users_by_pk?.first_name,
                last_name: profileData.Users_by_pk?.last_name,
                image: profileData.Users_by_pk?.image,
                bio:
                  profileData.BreakerProfiles.length > 0
                    ? profileData.BreakerProfiles[0].bio
                    : null,
                video:
                  profileData.BreakerProfiles.length > 0
                    ? profileData.BreakerProfiles[0].video
                    : null,
                instagram:
                  profileData.BreakerProfiles.length > 0
                    ? profileData.BreakerProfiles[0].instagram
                    : null,
                twitter:
                  profileData.BreakerProfiles.length > 0
                    ? profileData.BreakerProfiles[0].twitter
                    : null,
                facebook:
                  profileData.BreakerProfiles.length > 0
                    ? profileData.BreakerProfiles[0].facebook
                    : null,
                linkedin:
                  profileData.BreakerProfiles.length > 0
                    ? profileData.BreakerProfiles[0].linkedin
                    : null,
                tiktok:
                  profileData.BreakerProfiles.length > 0
                    ? profileData.BreakerProfiles[0].tiktok
                    : null,
              }}
              callback={() => {
                if (user && userId) {
                  setProfileModalOpen(false);
                  getProfile({
                    variables: { id: typeof userId === 'string' ? userId : '' },
                  });
                }
              }}
            />
          </FormModal>
        )}
      </Layout>
    </>
  );
};

export default ProfilePage;
