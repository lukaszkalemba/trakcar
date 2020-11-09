import React from 'react';
import ReactCalendar from 'react-calendar';
import cx from 'classnames';
import { getWeekDays } from 'helpers/getWeekDays';
import styles from './Calendar.module.scss';
import 'styles/custom-calendar-styles.scss';

const Calendar: React.FC<CalendarProps> = ({ hideOnMobile }) => {
  const handleDateChange = () => {
    console.log('date changed');
  };

  const selectedDate = new Date();

  const wrapperClass = cx(styles.wrapper, {
    [styles.hideOnMobile]: hideOnMobile,
  });

  return (
    <div className={wrapperClass}>
      <ReactCalendar
        formatShortWeekday={getWeekDays}
        onChange={handleDateChange}
        value={selectedDate}
      />
    </div>
  );
};

interface CalendarProps {
  hideOnMobile?: boolean;
}

export default Calendar;
