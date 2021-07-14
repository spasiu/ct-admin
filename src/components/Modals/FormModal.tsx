import React from 'react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Heading,
} from '@chakra-ui/react';

type TFormModal = {
  children: React.ReactNode;
  title: string;
  isOpen: boolean;
  setModalOpen: (n: boolean) => void;
};

const FormModal: React.FC<TFormModal> = ({
  children,
  title,
  isOpen,
  setModalOpen,
}) => {
  return (
    <Modal
      size="xl"
      isOpen={isOpen}
      closeOnOverlayClick={false}
      onClose={() => {
        setModalOpen && setModalOpen(false);
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading as="h3" m={0} fontSize={24}>
            {title}
          </Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default FormModal;
