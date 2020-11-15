import React from 'react';
import { useHistory } from 'react-router-dom';
import ReactCalendar from 'react-calendar';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateSelectedDate,
  calendarDatesSelector,
} from 'modules/calendar-dates';
import { getWeekDays } from 'helpers/getWeekDays';
import styles from './Calendar.module.scss';
import 'styles/calendar-styles.scss';

const Calendar: React.FC<CalendarProps> = ({ closeModal }) => {
  const history = useHistory();

  const dispatch = useDispatch();
  const { selectedDate } = useSelector(calendarDatesSelector);

  const handleDateChange = (date: Date | Date[]) => {
    dispatch(updateSelectedDate(date as Date, closeModal));
    history.push('/');
  };

  return (
    <div className={styles.wrapper}>
      <ReactCalendar
        formatShortWeekday={getWeekDays}
        onChange={handleDateChange}
        value={new Date(selectedDate)}
        locale="en-EN"
      />
    </div>
  );
};

interface CalendarProps {
  closeModal?: () => void;
}

export default Calendar;
