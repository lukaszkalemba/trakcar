import * as yup from 'yup';
import { SigninValues } from 'modules/users';

export const initialValues: SigninValues = {
  email: '',
  password: '',
};

export const validationSchema = yup.object({
  email: yup
    .string()
    .email('Email must be valid')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});
