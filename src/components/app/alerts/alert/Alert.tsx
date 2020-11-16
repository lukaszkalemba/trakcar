import React from 'react';
import cx from 'classnames';
import styles from './Alert.module.scss';

const Alert: React.FC<AlertProps> = ({ message, alertType }) => {
  const alertClass = cx(styles.alert, {
    [styles.success]: alertType === 'success',
    [styles.error]: alertType === 'error',
  });

  return <div className={alertClass}>{message}</div>;
};

interface AlertProps {
  message: string;
  alertType: 'success' | 'error';
}

export default Alert;
