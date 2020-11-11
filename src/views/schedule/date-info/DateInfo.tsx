import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDays, subDays } from 'date-fns';
import {
  calendarDatesSelector,
  updateSelectedDate,
} from 'modules/calendar-dates';
import arrow_left_icon from 'assets/svgs/icon_arrow-left-white.svg';
import arrow_right_icon from 'assets/svgs/icon_arrow-right-white.svg';
import Icon from 'components/icon/Icon';
import styles from './DateInfo.module.scss';

const DateInfo: React.FC = () => {
  const dispatch = useDispatch();

  const { selectedDate } = useSelector(calendarDatesSelector);

  const resetDate = () => {
    dispatch(updateSelectedDate(new Date()));
  };

  const incrementDate = (date: string) => {
    dispatch(updateSelectedDate(addDays(new Date(date), 1)));
  };

  const decrementDate = (date: string) => {
    dispatch(updateSelectedDate(subDays(new Date(date), 1)));
  };

  return (
    <div className={styles.wrapper}>
      <button
        onClick={() => decrementDate(selectedDate)}
        className={styles.arrowButton}
      >
        <Icon src={arrow_left_icon} />
      </button>
      <time dateTime={selectedDate}>
        <button onClick={resetDate} className={styles.dateButton}>
          {selectedDate}
        </button>
      </time>
      <button
        onClick={() => incrementDate(selectedDate)}
        className={styles.arrowButton}
      >
        <Icon src={arrow_right_icon} />
      </button>
    </div>
  );
};

export default DateInfo;
