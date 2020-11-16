import React, { ReactNode } from 'react';
import TopBar from './top-bar/TopBar';
import DesktopNavigation from './desktop-navigation/DesktopNavigation';
import DesktopAside from './desktop-aside/DesktopAside';
import MobileNavigation from './mobile-navigation/MobileNavigation';
import styles from './Layout.module.scss';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <TopBar />
      <div className={styles.desktopView}>
        <DesktopNavigation />
        <DesktopAside />
        <main>{children}</main>
      </div>
      <MobileNavigation />
    </div>
  );
};

export interface LayoutProps {
  children: ReactNode;
}

export default Layout;
