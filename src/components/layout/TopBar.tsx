import React from 'react';
import Icon from 'components/Icon';
import logo from 'assets/svgs/logo_trakcar.svg';
import styles from './TopBar.module.scss';

const TopBar: React.FC = () => {
  return (
    <div className={styles.topBar}>
      <Icon src={logo} />
    </div>
  );
};

export default TopBar;
