import React, { ReactNode, useRef, useState } from 'react';
import { useField } from 'formik';
import cx from 'classnames';
import Input from './input/Input';
import Label from './label/Label';
import Error from './error/Error';
import VisibilityButton from './visibility-button/VisibilityButton';
import styles from './Inputs.module.scss';

const handleError = (touched: boolean, error?: string) => {
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

  const inputClass = cx(styles.input, {
    [styles.error]: isError,
  });

  return (
    <div className={styles.wrapper}>
      <Input
        type="text"
        maxLength={maxLength}
        className={inputClass}
        {...field}
      />
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

  const inputClass = cx(styles.input, {
    [styles.error]: isError,
  });

  return (
    <div className={styles.wrapper}>
      <Input type="email" className={inputClass} {...field} />
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

  const inputClass = cx(styles.input, {
    [styles.error]: isError,
  });

  return (
    <div className={styles.wrapper}>
      <Input
        reference={inputRef}
        type={isPasswordVisible ? 'text' : 'password'}
        className={inputClass}
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

interface NumberProps extends InputProps {
  min: number;
}

const Number: React.FC<NumberProps> = ({ label, name, min }) => {
  const [field, meta] = useField({ name });
  const isError = handleError(meta.touched, meta.error);

  const inputClass = cx(styles.input, {
    [styles.error]: isError,
  });

  return (
    <div className={styles.wrapper}>
      <Input type="number" min={min} className={inputClass} {...field} />
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

interface SelectProps extends InputProps {
  children: ReactNode;
}

const Select: React.FC<SelectProps> = ({ label, name, children }) => {
  const [field, meta] = useField({ name });
  const isError = handleError(meta.touched, meta.error);

  const selectClass = cx(styles.input, {
    [styles.error]: isError,
  });

  return (
    <div className={styles.wrapper}>
      <select className={selectClass} {...field}>
        {children}
      </select>
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

interface TimeProps extends InputProps {
  step: number;
}

const Time: React.FC<TimeProps> = ({ label, name, step }) => {
  const [field, meta] = useField({ name });
  const isError = handleError(meta.touched, meta.error);

  const inputClass = cx(styles.input, {
    [styles.error]: isError,
  });

  return (
    <div className={styles.wrapper}>
      <Input type="time" step={step} className={inputClass} {...field} />
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

const Date: React.FC<InputProps> = ({ label, name }) => {
  const [field, meta] = useField({ name });
  const isError = handleError(meta.touched, meta.error);

  const inputClass = cx(styles.input, {
    [styles.error]: isError,
  });

  return (
    <div className={styles.wrapper}>
      <Input type="date" className={inputClass} {...field} />
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

interface TextareaProps extends InputProps {
  rows?: number;
}

const Textarea: React.FC<TextareaProps> = ({ label, name, rows }) => {
  const [field, meta] = useField({ name });
  const isError = handleError(meta.touched, meta.error);

  const textareaClass = cx(styles.textarea, {
    [styles.error]: isError,
  });

  return (
    <div className={styles.wrapper}>
      <textarea className={textareaClass} rows={rows} {...field} />
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

export { Text, Email, Password, Number, Select, Time, Date, Textarea };
