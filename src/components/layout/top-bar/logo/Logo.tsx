import React from 'react';
import { Link } from 'react-router-dom';
import trakcar_logo from 'assets/svgs/logo_trakcar.svg';
import Icon from 'components/icon/Icon';
import styles from './Logo.module.scss';

const Logo: React.FC = () => {
  return (
    <Link to="/">
      <Icon className={styles.logo} src={trakcar_logo} />
    </Link>
  );
};

export default Logo;
