import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';

const Seo: React.FC<SeoProps> = ({ title, children }) => {
  return (
    <Helmet>
      <title>trakcar | {title}</title>
      {children}
    </Helmet>
  );
};

interface SeoProps {
  title: string;
  children?: ReactNode;
}

export default Seo;
