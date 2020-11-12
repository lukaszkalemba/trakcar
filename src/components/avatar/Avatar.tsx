import React from 'react';
import styles from './Avatar.module.scss';

const Avatar: React.FC<AvatarProps> = ({ avatar }) => {
  return (
    <div className={styles.wrapper}>
      <img src={avatar} className={styles.avatar} alt="user avatar" />
    </div>
  );
};

interface AvatarProps {
  avatar?: string;
}

export default Avatar;
