import React, { RefObject, ChangeEvent, FocusEvent } from 'react';

const Input: React.FC<InputProps> = ({
  reference,
  type,
  name,
  value,
  onChange,
  onBlur,
  min,
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
      min={min}
      maxLength={maxLength}
      step={step}
    />
  );
};

interface InputProps {
  reference?: RefObject<HTMLInputElement>;
  name: string;
  type: 'text' | 'email' | 'password' | 'number' | 'time' | 'date';
  value: string;
  min?: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
  maxLength?: number;
  step?: number;
  className: string;
}

export default Input;
