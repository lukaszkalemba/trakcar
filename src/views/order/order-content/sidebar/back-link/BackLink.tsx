import React from 'react';
import { Link } from 'react-router-dom';
import arrow_icon from 'assets/svgs/icon_arrow-back.svg';
import Icon from 'components/icon/Icon';
import styles from './BackLink.module.scss';

const BackLink: React.FC = () => {
  return (
    <Link className={styles.link} to="/">
      <Icon src={arrow_icon} />
    </Link>
  );
};

export default BackLink;
