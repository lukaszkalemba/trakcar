import React from 'react';
import { Formik, Form } from 'formik';
import AuthViewTemplate from 'templates/auth-view-template/AuthViewTemplate';
import Button from 'components/button/Button';
import { initialValues, validationSchema, onSubmit } from './Signup.formik';

const Signup: React.FC = () => {
  return (
    <AuthViewTemplate>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <Button type="submit">sign up</Button>
          </Form>
        )}
      </Formik>
    </AuthViewTemplate>
  );
};

export default Signup;
