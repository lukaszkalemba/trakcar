import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavItem.module.scss';

const NavItem: React.FC<NavItemProps> = ({ path, subName, children }) => {
  return (
    <>
      <span className={styles.subName}>{subName}</span>
      <NavLink
        exact
        to={path}
        className={styles.navLink}
        activeClassName={styles.active}
      >
        {children}
      </NavLink>
    </>
  );
};

interface NavItemProps {
  path: string;
  subName: string;
  children: ReactNode;
}

export default NavItem;
