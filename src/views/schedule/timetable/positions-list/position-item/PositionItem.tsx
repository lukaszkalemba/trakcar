import React from 'react';
import styles from './PositionItem.module.scss';

const PositionItem: React.FC<PositionItemProps> = ({ name }) => {
  return <span className={styles.item}>{name}</span>;
};

interface PositionItemProps {
  name: string;
}

export default PositionItem;
