import React from 'react';
import ReactCalendar from 'react-calendar';
import { useSelector, useDispatch } from 'react-redux';
import cx from 'classnames';
import {
  updateSelectedDate,
  calendarDatesSelector,
} from 'modules/calendar-dates';
import { getWeekDays } from 'helpers/getWeekDays';
import styles from './Calendar.module.scss';
import 'styles/calendar-styles.scss';

const Calendar: React.FC<CalendarProps> = ({ modalCalendar, closeModal }) => {
  const dispatch = useDispatch();
  const { selectedDate } = useSelector(calendarDatesSelector);

  const handleDateChange = (date: Date | Date[]) => {
    dispatch(updateSelectedDate(date as Date, closeModal));
  };

  const wrapperClass = cx(styles.wrapper, {
    [styles.modalCalendar]: modalCalendar,
  });

  return (
    <div className={wrapperClass}>
      <ReactCalendar
        formatShortWeekday={getWeekDays}
        onChange={handleDateChange}
        value={new Date(selectedDate)}
      />
    </div>
  );
};

interface CalendarProps {
  modalCalendar?: boolean;
  closeModal?: () => void;
}

export default Calendar;
