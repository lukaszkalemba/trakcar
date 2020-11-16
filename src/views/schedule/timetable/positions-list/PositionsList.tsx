import React from 'react';
import { Position } from 'modules/positions';
import PositionItem from './position-item/PositionItem';
import styles from './PositionsList.module.scss';

const PositionsList: React.FC<PositionsListProps> = ({ positions }) => {
  return (
    <div className={styles.wrapper}>
      {(positions as Position[]).map(({ _id, positionName }) => (
        <PositionItem key={_id} positionName={positionName} />
      ))}
    </div>
  );
};

interface PositionsListProps {
  positions: Position[] | null;
}

export default PositionsList;
