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
  name: yup.string().min(5).required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

export const onSubmit = (values: SignupValues) => {
  console.log(values);
};
