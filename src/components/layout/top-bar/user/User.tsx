import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { usersSelector } from 'modules/users';
import Dropdown from './dropdown/Dropdown';
import styles from './User.module.scss';
import UserButton from './user-button/UserButton';

const User: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const { loading } = useSelector(usersSelector);
  const wrapper = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((state) => !state);
  };

  const handleClickOutside = (e: Event) => {
    if (wrapper.current?.contains(e.target as Node)) {
      return;
    }

    setIsDropdownOpen(false);
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return loading ? null : (
    <div ref={wrapper} className={styles.wrapper}>
      <UserButton
        isDropdownOpen={isDropdownOpen}
        toggleDropdown={toggleDropdown}
      />
      {isDropdownOpen && <Dropdown />}
    </div>
  );
};

export default User;
