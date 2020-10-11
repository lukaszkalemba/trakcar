import React from 'react';
import SVG from 'react-inlinesvg';
import cx from 'classnames';
import styles from './Icon.module.scss';

const Icon: React.FC<IconProps> = ({ src, className, ...props }) => {
  return (
    <div className={cx(styles.icon, className)} {...props}>
      <SVG src={src} />
    </div>
  );
};

interface IconProps {
  src: string;
  className?: string;
}

export default Icon;
