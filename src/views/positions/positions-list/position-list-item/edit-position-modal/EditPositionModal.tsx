import React from 'react';
import ModalTemplate from 'templates/modal-template/ModalTemplate';

const EditPositionModal: React.FC<EditPositionModalProps> = ({
  positionId,
  closeModal,
}) => {
  return (
    <ModalTemplate closeModal={closeModal}>
      <p>{positionId}</p>
    </ModalTemplate>
  );
};

interface EditPositionModalProps {
  positionId: string;
  closeModal: () => void;
}

export default EditPositionModal;
