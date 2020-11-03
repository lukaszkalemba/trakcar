import React, { useState } from 'react';
import { PositionData } from 'modules/positions';
import Buttons from './buttons/Buttons';
import EditPositionModal from './edit-position-modal/EditPositionModal';
import styles from './PositionListItem.module.scss';

const PositionListItem: React.FC<PositionListItemProps> = ({ position }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

  const closeModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <li className={styles.item}>
      <h2 className={styles.name}>{position.name}</h2>

      <div className={styles.range}>
        <time>{position.startTime}</time> - <time>{position.endTime}</time>
      </div>

      <Buttons
        positionId={position._id}
        setIsEditModalOpen={setIsEditModalOpen}
      />

      {isEditModalOpen && (
        <EditPositionModal positionId={position._id} closeModal={closeModal} />
      )}
    </li>
  );
};

interface PositionListItemProps {
  position: PositionData;
}

export default PositionListItem;
