import React from 'react';
import styles from './Error.module.scss';

const Error: React.FC<ErrorProps> = ({ isError, message }) => {
  return <div className={styles.error}>{isError && message}</div>;
};

interface ErrorProps {
  isError: boolean;
  message?: string;
}

export default Error;
