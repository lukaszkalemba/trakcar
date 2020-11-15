import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import cx from 'classnames';
import { createUseStyles } from 'react-jss';
import { positionsSelector, Position } from 'modules/positions';
import { generateGridColumn } from 'helpers/generateGridColumn';
import { generateGridRow } from 'helpers/generateGridRow';
import styles from './GridItems.module.scss';

const GridItems: React.FC<GridItemsProps> = ({ timetableHours }) => {
  const { positions } = useSelector(positionsSelector);

  const gridItems: ReactNode[] = [];

  (positions as Position[]).forEach((position) => {
    const startHourNum = parseInt(position.startTime.substring(0, 2), 10);
    const endHourNum = parseInt(position.endTime.substring(0, 2), 10);

    const hoursRange: string[] = [];

    for (let i = startHourNum; i <= endHourNum; i += 1) {
      hoursRange.push(`${i}:00`);
    }

    timetableHours.forEach((item) => {
      const gridColumnStart = generateGridColumn(position._id);
      const gridRowStart = generateGridRow(item);

      const { gridPosition } = createUseStyles({
        gridPosition: {
          gridColumnStart,
          gridRowStart,
        },
      })();

      const gridItemClass = cx(styles.gridItem, gridPosition, {
        [styles.disabled]: !hoursRange.find((hour) => hour === item),
      });

      gridItems.push(<span key={uuidv4()} className={gridItemClass} />);
    });
  });

  return <>{gridItems}</>;
};

interface GridItemsProps {
  timetableHours: string[];
}

export default GridItems;
