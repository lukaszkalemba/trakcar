import React, { useState, useRef } from 'react';
import { useField } from 'formik';
import cx from 'classnames';
import Icon from 'components/icon/Icon';
import visible_icon from 'assets/svgs/icon_eye-visible.svg';
import invisible_icon from 'assets/svgs/icon_eye-invisible.svg';
import styles from './PasswordInput.module.scss';

const PasswordInput: React.FC<PasswordInputProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const inputRef = useRef<any>();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((state) => !state);
    inputRef.current.focus();
  };

  const { name } = props;

  const isError = meta.touched && meta.error;

  const inputClass = cx(styles.input, {
    [styles.error]: isError,
  });

  const labelClass = cx(styles.label, {
    [styles.active]: field.value,
    [styles.error]: isError,
  });

  return (
    <div className={styles.wrapper}>
      <input
        ref={inputRef}
        id={name}
        className={inputClass}
        type={isPasswordVisible ? 'text' : 'password'}
        {...field}
        {...props}
      />
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      <button
        type="button"
        aria-controls={name}
        aria-expanded={isPasswordVisible}
        onClick={togglePasswordVisibility}
        className={styles.visibilityButton}
      >
        <Icon src={isPasswordVisible ? invisible_icon : visible_icon} />
      </button>
      <div className={styles.errorMessage}>{isError && meta.error}</div>
    </div>
  );
};

type PasswordInputProps = {
  label: string;
  name: string;
};

export default PasswordInput;
