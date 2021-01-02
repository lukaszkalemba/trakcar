import React, { memo } from 'react';
import styles from './Description.module.scss';

const Description: React.FC<DescriptionProps> = ({ text }) => {
  return <div className={styles.text}>{text}</div>;
};

interface DescriptionProps {
  text: string;
}

export default memo(Description);
