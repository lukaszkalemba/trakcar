import React from 'react';
import ModalTemplate from 'templates/modal-template/ModalTemplate';

const JoinOrganizationModal: React.FC<JoinOrganizationModalProps> = ({
  closeModal,
}) => {
  return (
    <ModalTemplate closeModal={closeModal}>
      Join existing organization
    </ModalTemplate>
  );
};

interface JoinOrganizationModalProps {
  closeModal: () => void;
}

export default JoinOrganizationModal;
