import React from 'react';
import styles from './HoursList.module.scss';

const HoursList: React.FC<HoursListProps> = ({ hours }) => {
  return (
    <div className={styles.wrapper}>
      {hours.map((hour) => (
        <span key={hour}>{hour}</span>
      ))}
    </div>
  );
};

interface HoursListProps {
  hours: string[];
}

export default HoursList;
