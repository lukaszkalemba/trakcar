import React, { ReactNode } from 'react';
import styles from './Button.module.scss';

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button type="button" className={styles.button}>
      {children}
    </button>
  );
};

export interface ButtonProps {
  children: ReactNode;
}

export default Button;
