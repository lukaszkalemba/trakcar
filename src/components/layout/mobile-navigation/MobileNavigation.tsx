import React from 'react';
import calendarIcon from 'assets/svgs/icon_calendar.svg';
import positionsIcon from 'assets/svgs/icon_positions.svg';
import profileIcon from 'assets/svgs/icon_profile-white.svg';
import organizationIcon from 'assets/svgs/icon_organization.svg';
import NavItem from './nav-item/NavItem';
import styles from './MobileNavigation.module.scss';

const MobileNavigation = () => {
  return (
    <nav className={styles.nav}>
      <NavItem to="/" icon={calendarIcon} />
      <NavItem to="/positions" icon={positionsIcon} />
      <NavItem to="/profile" icon={profileIcon} />
      <NavItem to="/organization" icon={organizationIcon} />
    </nav>
  );
};

export default MobileNavigation;
