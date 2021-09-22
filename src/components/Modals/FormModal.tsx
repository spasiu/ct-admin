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

import { TFormModal } from '@customTypes/components';

const FormModal: React.FC<TFormModal> = ({
  children,
  title,
  isOpen,
  closeOnEsc,
  setModalOpen,
}) => {
  return (
    <Modal
      size="xl"
      isOpen={isOpen}
      closeOnOverlayClick={false}
      closeOnEsc={typeof closeOnEsc !== 'undefined' ? closeOnEsc : true}
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
