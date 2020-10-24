import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavItem.module.scss';

const NavItem: React.FC<NavItemProps> = ({ path, children }) => {
  return (
    <NavLink
      exact
      to={path}
      className={styles.navLink}
      activeClassName={styles.active}
    >
      {children}
    </NavLink>
  );
};

interface NavItemProps {
  path: string;
  children: ReactNode;
}

export default NavItem;
