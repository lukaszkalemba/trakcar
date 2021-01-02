import React, { memo } from 'react';
import { routes } from 'utils/routes';
import NavItem from './nav-item/NavItem';
import styles from './MobileNavigation.module.scss';

const MobileNavigation = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        {routes.map(({ id, path, icon }) => (
          <li key={id}>
            <NavItem to={path} icon={icon} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default memo(MobileNavigation);
