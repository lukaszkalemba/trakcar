import React from 'react';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signInUser, SigninValues, usersSelector } from 'modules/users';
import AuthViewTemplate from 'templates/auth-view-template/AuthViewTemplate';
import Button from 'components/button/Button';
import * as Inputs from 'components/inputs/Inputs';
import arrow_right_icon from 'assets/svgs/icon_arrow-right.svg';
import { initialValues, validationSchema } from './SignIn.formik';

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, token } = useSelector(usersSelector);

  if (token) {
    return <Redirect to="/" />;
  }

  const handleSubmit = (values: SigninValues) => {
    dispatch(signInUser(values));
  };

  const pageToggleMessage = {
    messageText: 'No account?',
    linkPath: '/sign-up',
    linkText: 'Sign up',
  };

  return (
    <AuthViewTemplate loading={loading} pageToggleMessage={pageToggleMessage}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <Inputs.Email label="email" name="email" />
            <Inputs.Password label="password" name="password" />
            <Button type="submit" icon={arrow_right_icon}>
              sign in
            </Button>
          </Form>
        )}
      </Formik>
    </AuthViewTemplate>
  );
};

export default SignIn;
