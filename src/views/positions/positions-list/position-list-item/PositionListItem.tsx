import React, { useState } from 'react';
import { Position } from 'modules/positions';
import Buttons from './buttons/Buttons';
import UpdatePositionModal from './update-position-modal/UpdatePositionModal';
import styles from './PositionListItem.module.scss';

const PositionListItem: React.FC<PositionListItemProps> = ({ position }) => {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);

  const closeModal = () => {
    setIsUpdateModalOpen(false);
  };

  return (
    <li className={styles.item}>
      <h2 className={styles.name}>{position.name}</h2>

      <div className={styles.range}>
        <time>{position.startTime}</time> - <time>{position.endTime}</time>
      </div>

      <Buttons
        positionId={position._id}
        setIsUpdateModalOpen={setIsUpdateModalOpen}
      />

      {isUpdateModalOpen && (
        <UpdatePositionModal position={position} closeModal={closeModal} />
      )}
    </li>
  );
};

interface PositionListItemProps {
  position: Position;
}

export default PositionListItem;
