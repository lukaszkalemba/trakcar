import React from 'react';
import Icon from 'components/icon/Icon';
import trakcar_logo from 'assets/svgs/logo_trakcar.svg';
import User from './user/User';
import styles from './TopBar.module.scss';

const TopBar: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Icon className={styles.logo} src={trakcar_logo} />
      <User />
    </div>
  );
};

export default TopBar;
