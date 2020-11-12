import React from 'react';
import cx from 'classnames';
import styles from './LoadingSpinner.module.scss';

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ className }) => {
  return (
    <div className={cx(styles.wrapper, className)}>
      <div className={styles.spinner}>
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};

interface LoadingSpinnerProps {
  className?: string;
}

export default LoadingSpinner;
