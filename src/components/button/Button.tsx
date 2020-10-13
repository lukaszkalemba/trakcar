import React, { ReactNode } from 'react';
import cx from 'classnames';
import styles from './Button.module.scss';

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  className,
  onClick,
  children,
}) => {
  return (
    <button
      type={type}
      className={cx(styles.button, className)}
      onClick={onClick}
    >
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
