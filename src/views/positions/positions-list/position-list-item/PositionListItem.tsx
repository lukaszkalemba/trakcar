import React from 'react';
import { PositionData } from 'modules/positions';
import Buttons from './buttons/Buttons';
import styles from './PositionListItem.module.scss';

const PositionListItem: React.FC<PositionListItemProps> = ({ position }) => {
  return (
    <li className={styles.item}>
      <h2 className={styles.name}>{position.name}</h2>

      <div className={styles.range}>
        <time>{position.startTime}</time> - <time>{position.endTime}</time>
      </div>

      <Buttons positionId={position._id} />
    </li>
  );
};

interface PositionListItemProps {
  position: PositionData;
}

export default PositionListItem;
