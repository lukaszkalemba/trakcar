import React from 'react';
import Icon from 'components/icon/Icon';
import icon_plus from 'assets/svgs/icon_circle-plus.svg';
import icon_calendar from 'assets/svgs/icon_calendar-black.svg';
import styles from './Actions.module.scss';

const Actions: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.orderButton}>
        <span>Book an order</span>
        <Icon className={styles.orderIcon} src={icon_plus} />
      </button>
      <button className={styles.calendarButton}>
        <Icon src={icon_calendar} />
      </button>
    </div>
  );
};

export default Actions;
