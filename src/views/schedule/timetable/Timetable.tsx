import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
// import { ordersSelector } from 'modules/orders';
import { positionsSelector, Position } from 'modules/positions';
import { getTimetableHours } from 'helpers/getTimetableHours';
import PositionsList from './positions-list/PositionsList';
import HoursList from './hours-list/HoursList';
import styles from './Timetable.module.scss';

const Timetable: React.FC = () => {
  // const { orders } = useSelector(ordersSelector);
  const { positions } = useSelector(positionsSelector);

  const timetableHours = getTimetableHours(positions);

  document.documentElement.style.setProperty(
    '--columns',
    `${(positions as Position[]).length}`
  );

  document.documentElement.style.setProperty(
    '--rows',
    `${timetableHours.length}`
  );

  const gridItemsLength =
    (positions as Position[]).length * timetableHours.length;

  return (
    <div className={styles.wrapper}>
      <PositionsList positions={positions} />

      <div className={styles.gridWrapper}>
        <HoursList hours={timetableHours} />

        <div className={styles.grid}>
          {Array.from(Array(gridItemsLength)).map(() => (
            <span key={uuidv4()} className={styles.gridItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timetable;
