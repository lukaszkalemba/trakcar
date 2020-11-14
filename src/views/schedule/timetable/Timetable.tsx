import React from 'react';
import { useSelector } from 'react-redux';
import { ordersSelector } from 'modules/orders';
import styles from './Timetable.module.scss';

const Timetable: React.FC = () => {
  const { orders } = useSelector(ordersSelector);

  console.log(orders);

  return (
    <div className={styles.wrapper}>
      <h1>Timetable.tsx</h1>
    </div>
  );
};

export default Timetable;
