import React from 'react';
import logo from 'assets/svgs/logo_trakcar.svg';
import styles from './TopBar.module.scss';

const TopBar: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <img src={logo} alt="" />
    </div>
  );
};

export default TopBar;
