import React, { ReactNode } from 'react';
import TopBar from './top-bar/TopBar';
import MobileNavigation from './mobile-navigation/MobileNavigation';
import styles from './Layout.module.scss';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <TopBar />
      <main>{children}</main>
      <MobileNavigation />
    </div>
  );
};

export interface LayoutProps {
  children: ReactNode;
}

export default Layout;
