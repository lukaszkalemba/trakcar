import React from 'react';
import { Link } from 'react-router-dom';
import calendar_icon from 'assets/svgs/icon_calendar-black.svg';
import Icon from 'components/icon/Icon';
import styles from './ScheduleLink.module.scss';

const ScheduleLink = () => {
  return (
    <Link to="/" className={styles.link}>
      <Icon className={styles.icon} src={calendar_icon} />
      <span>Orders schedule</span>
    </Link>
  );
};

export default ScheduleLink;
