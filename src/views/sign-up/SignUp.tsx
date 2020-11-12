import React from 'react';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUpUser, SignupValues, usersSelector } from 'modules/users';
import AuthViewTemplate from 'templates/auth-view-template/AuthViewTemplate';
import Button from 'components/button/Button';
import * as Input from 'components/input/Input';
import arrow_right_icon from 'assets/svgs/icon_arrow-right.svg';
import { initialValues, validationSchema } from './SignUp.formik';

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
    <AuthViewTemplate loading={loading} pageToggleMessage={pageToggleMessage}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <Input.Text label="name" name="name" />
            <Input.Email label="email" name="email" />
            <Input.Password label="password" name="password" />
            <Button type="submit" icon={arrow_right_icon}>
              sign up
            </Button>
          </Form>
        )}
      </Formik>
    </AuthViewTemplate>
  );
};

export default SignUp;
