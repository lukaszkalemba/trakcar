import React from 'react';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import AuthViewTemplate from 'templates/auth-view-template/AuthViewTemplate';
import Button from 'components/button/Button';
import TextInput from 'components/text-input/TextInput';
import { initialValues, validationSchema, onSubmit } from './SignUp.formik';

const SignUp: React.FC = () => {
  const togglePageMessage = (
    <p>
      Already have an account? <Link to="/sign_in">Sign in</Link>
    </p>
  );

  return (
    <AuthViewTemplate togglePageMessage={togglePageMessage}>
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
