import React from 'react';
import styles from './PositionItem.module.scss';

const PositionItem: React.FC<PositionItemProps> = ({ positionName }) => {
  return <span className={styles.item}>{positionName}</span>;
};

interface PositionItemProps {
  positionName: string;
}

export default PositionItem;
