import React from 'react';
import calendar_icon from 'assets/svgs/icon_calendar.svg';
import positions_icon from 'assets/svgs/icon_positions.svg';
import profile_icon from 'assets/svgs/icon_profile-white.svg';
import organization_icon from 'assets/svgs/icon_organization.svg';
import NavItem from './nav-item/NavItem';
import styles from './MobileNavigation.module.scss';

const MobileNavigation = () => {
  return (
    <nav className={styles.nav}>
      <NavItem to="/" icon={calendar_icon} />
      <NavItem to="/positions" icon={positions_icon} />
      <NavItem to="/profile" icon={profile_icon} />
      <NavItem to="/organization" icon={organization_icon} />
    </nav>
  );
};

export default MobileNavigation;
