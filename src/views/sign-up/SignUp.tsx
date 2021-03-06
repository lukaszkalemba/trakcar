import React from 'react';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUpUser, SignupValues, usersSelector } from 'modules/users';
import AuthViewTemplate from 'templates/auth-view-template/AuthViewTemplate';
import Seo from 'components/seo/Seo';
import Button from 'components/button/Button';
import * as Inputs from 'components/inputs/Inputs';
import { initialValues, validationSchema } from './SignUp.form';

const SignUp: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, token } = useSelector(usersSelector);

  if (token) {
    return <Redirect to="/" />;
  }

  const handleSubmit = (values: SignupValues) => {
    dispatch(signUpUser(values));
  };

  const pageToggleMessage = {
    messageText: 'Already have an account?',
    linkPath: '/sign-in',
    linkText: 'Sign in',
  };

  return (
    <>
      <Seo title="sign up" />

      <AuthViewTemplate loading={loading} pageToggleMessage={pageToggleMessage}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <Inputs.Text label="name" name="name" />
              <Inputs.Email label="email" name="email" />
              <Inputs.Password label="password" name="password" />
              <Button type="submit">sign up</Button>
            </Form>
          )}
        </Formik>
      </AuthViewTemplate>
    </>
  );
};

export default SignUp;
