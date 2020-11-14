import React from 'react';
import { useSelector } from 'react-redux';
// import { ordersSelector } from 'modules/orders';
import { positionsSelector } from 'modules/positions';
import { getTimetableHours } from 'helpers/getTimetableHours';
import HoursList from './hours-list/HoursList';
import styles from './Timetable.module.scss';

const Timetable: React.FC = () => {
  // const { orders } = useSelector(ordersSelector);
  const { positions } = useSelector(positionsSelector);

  const timetableHours = getTimetableHours(positions);

  // const rows = timetableHours.length;
  // console.log(rows);

  return (
    <div className={styles.wrapper}>
      <HoursList hours={timetableHours} />
    </div>
  );
};

export default Timetable;
