import React from 'react';
import styles from './HoursList.module.scss';

const HoursList: React.FC<HoursListProps> = ({ timetableHours }) => {
  return (
    <div className={styles.wrapper}>
      {timetableHours.map((hour) => (
        <span key={hour}>{hour}</span>
      ))}
    </div>
  );
};

interface HoursListProps {
  timetableHours: string[];
}

export default HoursList;
