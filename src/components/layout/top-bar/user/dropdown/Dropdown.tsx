import React from 'react';
import Button from 'components/button/Button';
import logout_icon from 'assets/svgs/icon_logout.svg';
import black_profile_icon from 'assets/svgs/icon_profile-black.svg';
import styles from './Dropdown.module.scss';

const Dropdown: React.FC = () => {
  return (
    <div className={styles.dropdown}>
      <Button iconSrc={black_profile_icon}>profile</Button>
      <Button iconSrc={logout_icon}>logout</Button>
    </div>
  );
};

export default Dropdown;
