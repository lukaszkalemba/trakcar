import React from 'react';
import { routes } from 'utils/routes';
import NavItem from './nav-item/NavItem';
import styles from './MobileNavigation.module.scss';

const MobileNavigation = () => {
  return (
    <nav className={styles.nav}>
      {routes.map(({ id, path, icon }) => (
        <NavItem key={id} to={path} icon={icon} />
      ))}
    </nav>
  );
};

export default MobileNavigation;
