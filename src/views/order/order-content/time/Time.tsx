import React, { memo } from 'react';
import { format } from 'date-fns';
import styles from './Time.module.scss';

const Time: React.FC<TimeProps> = ({ startTime, endTime, date }) => {
  return (
    <div className={styles.time}>
      <time>
        {startTime} - {endTime},{' '}
        <span className={styles.date}>
          {format(new Date(date), 'dd.MM.yyyy')}
        </span>
      </time>
    </div>
  );
};

interface TimeProps {
  startTime: string;
  endTime: string;
  date: string;
}

export default memo(Time);
