import React from 'react';
import styles from './Dropdown.module.scss';

const Dropdown: React.FC = () => {
  return (
    <div className={styles.dropdown}>
      <button>profile</button>
      <button>logout</button>
    </div>
  );
};

export default Dropdown;
