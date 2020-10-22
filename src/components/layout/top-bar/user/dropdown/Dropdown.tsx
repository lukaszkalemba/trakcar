import React from 'react';
import Button from 'components/button/Button';
import logoutIcon from 'assets/svgs/icon_logout.svg';
import personIcon from 'assets/svgs/icon_person.svg';
import styles from './Dropdown.module.scss';

const Dropdown: React.FC = () => {
  return (
    <div className={styles.dropdown}>
      <Button iconSrc={personIcon}>profile</Button>
      <Button iconSrc={logoutIcon}>logout</Button>
    </div>
  );
};

export default Dropdown;
