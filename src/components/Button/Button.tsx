import React, { ReactNode } from 'react';

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button type="button">{children}</button>;
};

export interface ButtonProps {
  children: ReactNode;
}

export default Button;
