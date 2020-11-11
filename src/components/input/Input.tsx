import React, { useRef, useState } from 'react';
import { useField } from 'formik';
import cx from 'classnames';
import Icon from 'components/icon/Icon';
import visible_icon from 'assets/svgs/icon_eye-visible.svg';
import invisible_icon from 'assets/svgs/icon_eye-invisible.svg';
import styles from './Input.module.scss';

const handleError = (touched: boolean, error: undefined | string) => {
  return !!(touched && error);
};

const getInputClass = (isError: boolean) => {
  return cx(styles.input, {
    [styles.error]: isError,
  });
};

const getLabelClass = (
  isError: boolean,
  value: string,
  ...classes: string[]
) => {
  return cx(styles.label, ...classes, {
    [styles.active]: value,
    [styles.error]: isError,
  });
};

interface InputProps {
  label: string;
  name: string;
}

interface TextProps extends InputProps {
  maxLength?: number;
}

const Text: React.FC<TextProps> = ({ label, name, maxLength }) => {
  const [field, meta] = useField({ name });

  const isError = handleError(meta.touched, meta.error);

  const inputClass = getInputClass(isError);
  const labelClass = getLabelClass(isError, field.value);

  return (
    <div className={styles.wrapper}>
      <input
        id={name}
        type="text"
        maxLength={maxLength}
        className={inputClass}
        {...field}
      />
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      <div className={styles.errorMessage}>{isError && meta.error}</div>
    </div>
  );
};

const Email: React.FC<InputProps> = ({ label, name }) => {
  const [field, meta] = useField({ name });

  const isError = handleError(meta.touched, meta.error);

  const inputClass = getInputClass(isError);
  const labelClass = getLabelClass(isError, field.value);

  return (
    <div className={styles.wrapper}>
      <input id={name} type="email" className={inputClass} {...field} />
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      <div className={styles.errorMessage}>{isError && meta.error}</div>
    </div>
  );
};

const Password: React.FC<InputProps> = ({ label, name }) => {
  const [field, meta] = useField({ name });
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const inputRef = useRef<any>();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((state) => !state);
    inputRef.current.focus();
  };

  const isError = handleError(meta.touched, meta.error);

  const inputClass = getInputClass(isError);
  const labelClass = getLabelClass(isError, field.value);

  return (
    <div className={styles.wrapper}>
      <input
        ref={inputRef}
        id={name}
        type={isPasswordVisible ? 'text' : 'password'}
        className={inputClass}
        {...field}
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

interface TimeProps extends InputProps {
  step: number;
}

const Time: React.FC<TimeProps> = ({ label, name, step }) => {
  const [field, meta] = useField({ name });

  const isError = handleError(meta.touched, meta.error);

  const inputClass = getInputClass(isError);
  const labelClass = getLabelClass(isError, field.value, styles.timeType);

  return (
    <div className={styles.wrapper}>
      <input
        id={name}
        type="time"
        step={step}
        className={inputClass}
        {...field}
      />
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      <div className={styles.errorMessage}>{isError && meta.error}</div>
    </div>
  );
};

export { Text, Email, Password, Time };
