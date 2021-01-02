import React, { memo } from 'react';
import Logo from './logo/Logo';
import LogoutButton from './logout-button/LogoutButton';
import styles from './TopBar.module.scss';

const TopBar: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Logo />
      <LogoutButton />
    </div>
  );
};

export default memo(TopBar);
