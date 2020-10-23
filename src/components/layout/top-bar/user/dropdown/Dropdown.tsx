import React from 'react';
import Button from 'components/button/Button';
import logout_icon from 'assets/svgs/icon_logout.svg';
import person_icon from 'assets/svgs/icon_person.svg';
import styles from './Dropdown.module.scss';

const Dropdown: React.FC = () => {
  return (
    <div className={styles.dropdown}>
      <Button iconSrc={person_icon}>profile</Button>
      <Button iconSrc={logout_icon}>logout</Button>
    </div>
  );
};

export default Dropdown;
