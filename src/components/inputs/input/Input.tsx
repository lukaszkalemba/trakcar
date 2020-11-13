import React, { RefObject, ChangeEvent, FocusEvent } from 'react';

const Input: React.FC<InputProps> = ({
  reference,
  type,
  name,
  value,
  onChange,
  onBlur,
  maxLength,
  step,
  className,
}) => {
  return (
    <input
      ref={reference}
      id={name}
      className={className}
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
  maxLength?: number;
  step?: number;
  className: string;
}

export default Input;
