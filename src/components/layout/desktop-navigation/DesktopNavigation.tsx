import React, { memo } from 'react';
import { routes } from 'utils/routes';
import NavItem from './nav-item/NavItem';
import styles from './DesktopNavigation.module.scss';

const DesktopNavigation: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        {routes.map(({ id, path, name, subName }) => (
          <li key={id}>
            <NavItem path={path} subName={subName}>
              {name}
            </NavItem>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default memo(DesktopNavigation);
