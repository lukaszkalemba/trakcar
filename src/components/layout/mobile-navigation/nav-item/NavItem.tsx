import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from 'components/icon/Icon';
import styles from './NavItem.module.scss';

const NavItem: React.FC<NavItemProps> = ({ to, icon }) => {
  return (
    <NavLink
      to={to}
      className={styles.navLink}
      activeClassName={styles.active}
      exact
    >
      <Icon src={icon} className={styles.icon} />
    </NavLink>
  );
};

interface NavItemProps {
  to: string;
  icon: any;
}

export default NavItem;
