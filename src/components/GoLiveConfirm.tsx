import React from 'react';

import {
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
} from '@chakra-ui/react';

import { TGoLiveConfirm } from '@customTypes/events';

const GoLiveConfirm: React.FC<TGoLiveConfirm> = ({
  isOpen,
  cancelRef,
  onClose,
  callback,
}) => (
  <AlertDialog
    motionPreset="slideInBottom"
    leastDestructiveRef={cancelRef}
    onClose={onClose}
    isOpen={isOpen}
    isCentered
  >
    <AlertDialogOverlay />

    <AlertDialogContent>
      <AlertDialogHeader>Go Live</AlertDialogHeader>
      <AlertDialogCloseButton />
      <AlertDialogBody>
        Are you sure you want to start the event without an active stream?
      </AlertDialogBody>
      <AlertDialogFooter>
        <Button ref={cancelRef} onClick={onClose}>
          No
        </Button>
        <Button
          colorScheme="red"
          ml={3}
          onClick={() => {
            callback();
            onClose();
          }}
        >
          Yes
        </Button>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default GoLiveConfirm;
