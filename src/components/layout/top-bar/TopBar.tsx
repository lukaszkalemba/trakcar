import React from 'react';
import Logo from './logo/Logo';
import User from './user/User';
import styles from './TopBar.module.scss';

const TopBar: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Logo />
      <User />
    </div>
  );
};

export default TopBar;
