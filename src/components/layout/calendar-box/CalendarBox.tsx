import React from 'react';
import { useHistory } from 'react-router-dom';
import Calendar from 'components/calendar/Calendar';
import ScheduleLink from './schedule-link/ScheduleLink';
import styles from './CalendarBox.module.scss';

const CalendarBox: React.FC = () => {
  const { location } = useHistory();

  return (
    <div className={styles.wrapper}>
      {location.pathname === '/' ? <Calendar /> : <ScheduleLink />}
    </div>
  );
};

export default CalendarBox;
