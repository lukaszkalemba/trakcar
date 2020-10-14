import React from 'react';
import { useField } from 'formik';
import cx from 'classnames';
import styles from './TextInput.module.scss';

const TextInput: React.FC<TextInputProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

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
      <input id={name} className={inputClass} {...field} {...props} />
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      <div className={styles.errorMessage}>{isError && meta.error}</div>
    </div>
  );
};

type TextInputProps = {
  label: string;
  name: string;
  type: 'text' | 'email' | 'password';
};

export default TextInput;
