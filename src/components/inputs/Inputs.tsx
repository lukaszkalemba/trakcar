import React, { useRef, useState } from 'react';
import { useField } from 'formik';
import Input from './input/Input';
import Label from './label/Label';
import Error from './error/Error';
import VisibilityButton from './visibility-button/VisibilityButton';
import styles from './Inputs.module.scss';

const handleError = (touched: boolean, error: undefined | string) => {
  return !!(touched && error);
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

  return (
    <div className={styles.wrapper}>
      <Input type="text" maxLength={maxLength} isError={isError} {...field} />
      <Label
        name={name}
        content={label}
        isActive={!!field.value}
        isError={isError}
      />
      <Error isError={isError} message={meta.error} />
    </div>
  );
};

const Email: React.FC<InputProps> = ({ label, name }) => {
  const [field, meta] = useField({ name });
  const isError = handleError(meta.touched, meta.error);

  return (
    <div className={styles.wrapper}>
      <Input type="email" isError={isError} {...field} />
      <Label
        name={name}
        content={label}
        isActive={!!field.value}
        isError={isError}
      />
      <Error isError={isError} message={meta.error} />
    </div>
  );
};

const Password: React.FC<InputProps> = ({ label, name }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const [field, meta] = useField({ name });
  const isError = handleError(meta.touched, meta.error);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((state) => !state);
    (inputRef.current as HTMLInputElement).focus();
  };

  return (
    <div className={styles.wrapper}>
      <Input
        reference={inputRef}
        type={isPasswordVisible ? 'text' : 'password'}
        isError={isError}
        {...field}
      />
      <Label
        name={name}
        content={label}
        isActive={!!field.value}
        isError={isError}
      />
      <VisibilityButton
        name={name}
        isPasswordVisible={isPasswordVisible}
        togglePasswordVisibility={togglePasswordVisibility}
      />
      <Error isError={isError} message={meta.error} />
    </div>
  );
};

interface TimeProps extends InputProps {
  step: number;
}

const Time: React.FC<TimeProps> = ({ label, name, step }) => {
  const [field, meta] = useField({ name });
  const isError = handleError(meta.touched, meta.error);

  return (
    <div className={styles.wrapper}>
      <Input type="time" isError={isError} step={step} {...field} />
      <Label
        name={name}
        content={label}
        isActive={!!field.value}
        isError={isError}
        className={styles.timeLabel}
      />
      <Error isError={isError} message={meta.error} />
    </div>
  );
};

export { Text, Email, Password, Time };
