import React, { memo, ReactNode } from 'react';
import cx from 'classnames';
import styles from './Heading.module.scss';

const Heading: React.FC<HeadingProps> = ({ className, children }) => {
  return <h1 className={cx(styles.heading, className)}>{children}</h1>;
};

interface HeadingProps {
  className?: string;
  children: ReactNode;
}

export default memo(Heading);
