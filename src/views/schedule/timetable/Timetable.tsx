import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import cx from 'classnames';
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

  const gridColumnsCSS = (positions as Position[]).reduce((acc, cur) => {
    return `${acc} [${cur._id}] 1fr`;
  }, '');

  const gridRowsCSS = timetableHours.reduce((acc, cur) => {
    return `${acc} [H${cur.substring(0, 2).replace(':', '')}] 1fr`;
  }, '');

  document.documentElement.style.setProperty('--columns', gridColumnsCSS);
  document.documentElement.style.setProperty('--rows', gridRowsCSS);

  const gridItems: ReactNode[] = [];

  (positions as Position[]).forEach((position) => {
    const startHourNum = parseInt(position.startTime.substring(0, 2), 10);
    const endHourNum = parseInt(position.endTime.substring(0, 2), 10);

    const hoursRange: string[] = [];

    for (let i = startHourNum; i <= endHourNum; i += 1) {
      hoursRange.push(`${i}:00`);
    }

    timetableHours.forEach((item) => {
      const gridItemClass = cx(styles.gridItem, {
        [styles.disabled]: !hoursRange.find((hour) => hour === item),
      });

      gridItems.push(<span key={uuidv4()} className={gridItemClass} />);
    });
  });

  return (
    <div className={styles.wrapper}>
      <PositionsList positions={positions} />

      <div className={styles.gridWrapper}>
        <HoursList hours={timetableHours} />

        <div className={styles.grid}>{gridItems}</div>
      </div>
    </div>
  );
};

export default Timetable;
