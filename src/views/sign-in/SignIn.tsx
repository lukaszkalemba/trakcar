import React from 'react';
import { Formik, Form } from 'formik';
import AuthViewTemplate from 'templates/auth-view-template/AuthViewTemplate';
import Button from 'components/button/Button';
import TextInput from 'components/text-input/TextInput';
import { initialValues, validationSchema, onSubmit } from './SignIn.formik';

const SignIn: React.FC = () => {
  return (
    <AuthViewTemplate>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <TextInput label="Email" name="email" type="email" />
            <TextInput label="Password" name="password" type="password" />
            <Button type="submit">sign in</Button>
          </Form>
        )}
      </Formik>
    </AuthViewTemplate>
  );
};

export default SignIn;
