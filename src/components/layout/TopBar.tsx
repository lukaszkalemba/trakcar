import React from 'react';
import Icon from 'components/Icon';
import logo from 'assets/svgs/logo_trakcar.svg';
import User from './topBar/User';
import styles from './TopBar.module.scss';

const TopBar: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Icon className={styles.logo} src={logo} />
      <User />
    </div>
  );
};

export default TopBar;
