import React from 'react';
import CreatePositionButton from './create-position-button/CreatePositionButton';
import CreatePositionModal from './create-position-modal/CreatePositionModal';

const NewPositionContent: React.FC<NewPositionContentProps> = ({
  isCreateModalOpen,
  openModal,
  closeModal,
  noPosition,
}) => {
  return (
    <>
      <CreatePositionButton noPosition={noPosition} onClick={openModal}>
        add position
      </CreatePositionButton>
      {isCreateModalOpen && <CreatePositionModal closeModal={closeModal} />}
    </>
  );
};

interface NewPositionContentProps {
  isCreateModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  noPosition?: boolean;
}

export default NewPositionContent;
