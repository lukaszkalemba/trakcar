import React from 'react';
import cx from 'classnames';
import styles from './Label.module.scss';

const Label: React.FC<LabelProps> = ({
  name,
  content,
  isActive,
  isError,
  className,
}) => {
  const labelClass = cx(styles.label, className as string, {
    [styles.active]: isActive,
    [styles.error]: isError,
  });

  return (
    <label htmlFor={name} className={labelClass}>
      {content}
    </label>
  );
};

interface LabelProps {
  name: string;
  content: string;
  isActive: boolean;
  isError: boolean;
  className?: string;
}

export default Label;
