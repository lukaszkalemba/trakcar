import React from 'react';
import styles from './ButtonsActions.module.scss';

const ButtonsActions: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button}>Book order</button>
      <button className={styles.button}>Pick date</button>
    </div>
  );
};

export default ButtonsActions;
