import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';
import cx from 'classnames';
import { positionsSelector, Position } from 'modules/positions';
import { getTimetableHours } from 'helpers/getTimetableHours';
import PositionsList from './positions-list/PositionsList';
import HoursList from './hours-list/HoursList';
import GridItems from './grid-items/GridItems';
import Orders from './orders/Orders';
import styles from './Timetable.module.scss';

const Timetable: React.FC = () => {
  const { positions } = useSelector(positionsSelector);

  const timetableHours = getTimetableHours(positions);

  const gridTemplateColumns = (positions as Position[]).reduce((acc, cur) => {
    return `${acc} [P${cur._id}] 1fr`;
  }, '');

  const gridTemplateRows = timetableHours.reduce((acc, cur) => {
    return `${acc} [H${cur.substring(0, 2).replace(':', '')}] 1fr`;
  }, '');

  const { dynamicStyles } = createUseStyles({
    dynamicStyles: {
      gridTemplateColumns,
      gridTemplateRows,
    },
  })();

  return (
    <div className={styles.wrapper}>
      <PositionsList positions={positions} />

      <div className={styles.gridWrapper}>
        <HoursList timetableHours={timetableHours} />

        <div className={cx(styles.grid, dynamicStyles)}>
          <GridItems timetableHours={timetableHours} />
          <Orders />
        </div>
      </div>
    </div>
  );
};

export default memo(Timetable);
