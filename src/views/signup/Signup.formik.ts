import * as yup from 'yup';

interface SignupValues {
  name: string;
  email: string;
  password: string;
}

export const initialValues: SignupValues = {
  name: '',
  email: '',
  password: '',
};

export const validationSchema = yup.object({
  name: yup
    .string()
    .min(5, 'Name must be at least 5 characters')
    .required('Name is required'),
  email: yup
    .string()
    .email('Email must be valid')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export const onSubmit = (values: SignupValues) => {
  console.log(values);
};
