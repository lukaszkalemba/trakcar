import React from 'react';
import { routes } from 'utils/routes';
import NavItem from './nav-item/NavItem';
import styles from './DesktopNavigation.module.scss';

const DesktopNavigation: React.FC = () => {
  return (
    <nav className={styles.nav}>
      {routes.map(({ id, path, name }) => (
        <NavItem key={id} path={path}>
          {name}
        </NavItem>
      ))}
    </nav>
  );
};

export default DesktopNavigation;
