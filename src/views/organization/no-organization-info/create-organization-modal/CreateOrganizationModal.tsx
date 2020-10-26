import React from 'react';
import ModalTemplate from 'templates/modal-template/ModalTemplate';

const CreateOrganizationModal: React.FC<CreateOrganizationModalProps> = ({
  closeModal,
}) => {
  return (
    <ModalTemplate closeModal={closeModal}>
      create new organization
    </ModalTemplate>
  );
};

interface CreateOrganizationModalProps {
  closeModal: () => void;
}

export default CreateOrganizationModal;
