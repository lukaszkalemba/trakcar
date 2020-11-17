import React, { ReactNode } from 'react';
import styles from './Name.module.scss';

const Name: React.FC<NameProps> = ({ children }) => {
  return <h1 className={styles.name}>{children}</h1>;
};

interface NameProps {
  children: ReactNode;
}

export default Name;
