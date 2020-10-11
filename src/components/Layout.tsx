import React, { ReactNode } from 'react';

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

interface Props {
  children: ReactNode;
}

export default Layout;
