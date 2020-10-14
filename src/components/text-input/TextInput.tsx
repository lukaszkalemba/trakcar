import React from 'react';
import { useField } from 'formik';

const TextInput: React.FC<TextInputProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  const isError = meta.touched && meta.error;
  const { name } = props;

  return (
    <div>
      <input id={name} {...field} {...props} />
      <label htmlFor={name}>{label}</label>
      <div>{isError && meta.error}</div>
    </div>
  );
};

type TextInputProps = {
  label: string;
  name: string;
  type: 'text' | 'email' | 'password';
};

export default TextInput;
