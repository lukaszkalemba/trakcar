import React, { RefObject, ChangeEvent, FocusEvent } from 'react';
import cx from 'classnames';
import styles from './Input.module.scss';

const Input: React.FC<InputProps> = ({
  reference,
  type,
  name,
  value,
  onChange,
  onBlur,
  isError,
  maxLength,
  step,
}) => {
  const inputClass = cx(styles.input, {
    [styles.error]: isError,
  });

  return (
    <input
      ref={reference}
      id={name}
      className={inputClass}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      maxLength={maxLength}
      step={step}
    />
  );
};

interface InputProps {
  reference?: RefObject<HTMLInputElement>;
  name: string;
  type: 'text' | 'email' | 'password' | 'time';
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
  isError: boolean;
  maxLength?: number;
  step?: number;
}

export default Input;
