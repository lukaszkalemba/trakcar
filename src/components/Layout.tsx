import React, { ReactNode } from 'react';
import TopBar from './layout/TopBar';

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <TopBar />
      <main>{children}</main>
    </div>
  );
};

interface Props {
  children: ReactNode;
}

export default Layout;
