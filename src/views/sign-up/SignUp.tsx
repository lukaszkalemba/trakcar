import React from 'react';
import { Formik, Form } from 'formik';
import AuthViewTemplate from 'templates/auth-view-template/AuthViewTemplate';
import Button from 'components/button/Button';
import TextInput from 'components/text-input/TextInput';
import { initialValues, validationSchema, onSubmit } from './SignUp.formik';

const SignUp: React.FC = () => {
  return (
    <AuthViewTemplate>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <TextInput label="Name" name="name" type="text" />
            <TextInput label="Email" name="email" type="email" />
            <TextInput label="Password" name="password" type="password" />
            <Button type="submit">sign up</Button>
          </Form>
        )}
      </Formik>
    </AuthViewTemplate>
  );
};

export default SignUp;
