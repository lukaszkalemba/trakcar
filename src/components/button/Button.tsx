import React, { ReactNode } from 'react';

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  className,
  onClick,
  children,
}) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

interface ButtonProps {
  type?: 'button' | 'submit';
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

export default Button;
