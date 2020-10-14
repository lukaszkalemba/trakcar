import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/icon/Icon';
import calendarIcon from 'assets/svgs/icon_calendar.svg';
import positionsIcon from 'assets/svgs/icon_positions.svg';
import profileIcon from 'assets/svgs/icon_profile.svg';
import organizationIcon from 'assets/svgs/icon_organization.svg';
import styles from './MobileNavigation.module.scss';

const MobileNavigation = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <Icon src={calendarIcon} />
      </Link>
      <Link to="/positions">
        <Icon src={positionsIcon} />
      </Link>
      <Link to="/profile">
        <Icon src={profileIcon} />
      </Link>
      <Link to="/organization">
        <Icon src={organizationIcon} />
      </Link>
    </nav>
  );
};

export default MobileNavigation;
