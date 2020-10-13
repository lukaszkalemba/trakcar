import React, { ReactNode } from 'react';

const AuthViewTemplate: React.FC<AuthViewTemplateProps> = ({ children }) => {
  return <div>{children}</div>;
};

interface AuthViewTemplateProps {
  children: ReactNode;
}

export default AuthViewTemplate;
