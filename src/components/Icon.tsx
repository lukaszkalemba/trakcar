import React from 'react';
import SVG from 'react-inlinesvg';
import styles from './Icon.module.scss';

const Icon: React.FC<IconProps> = ({ src, ...props }) => {
  return (
    <div className={styles.icon} {...props}>
      <SVG src={src} />
    </div>
  );
};

interface IconProps {
  src: string;
}

export default Icon;
