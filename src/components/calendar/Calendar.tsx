import React from 'react';
import ReactCalendar from 'react-calendar';
import cx from 'classnames';
import { getWeekDays } from 'helpers/getWeekDays';
import styles from './Calendar.module.scss';
import 'styles/calendar-styles.scss';

const Calendar: React.FC<CalendarProps> = ({ modalCalendar }) => {
  const handleDateChange = () => {
    console.log('date changed');
  };

  const selectedDate = new Date();

  const wrapperClass = cx(styles.wrapper, {
    [styles.modalCalendar]: modalCalendar,
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
  modalCalendar?: boolean;
}

export default Calendar;
