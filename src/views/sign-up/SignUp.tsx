import React from 'react';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { signUpUser, SignupValues, usersSelector } from 'modules/users';
import AuthViewTemplate from 'templates/auth-view-template/AuthViewTemplate';
import Button from 'components/button/Button';
import TextInput from 'components/text-input/TextInput';
import arrow_right_icon from 'assets/svgs/icon_arrow-right.svg';
import { initialValues, validationSchema } from './SignUp.formik';

const SignUp: React.FC = () => {
  const dispatch = useDispatch();
  const { token } = useSelector(usersSelector);

  if (token) {
    return <Redirect to="/" />;
  }

  const handleSubmit = (values: SignupValues) => {
    dispatch(signUpUser(values));
  };

  const togglePageMessage = (
    <p>
      Already have an account? <Link to="/sign-in">Sign in</Link>
    </p>
  );

  return (
    <AuthViewTemplate togglePageMessage={togglePageMessage}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <TextInput label="Name" name="name" type="text" />
            <TextInput label="Email" name="email" type="email" />
            <TextInput label="Password" name="password" type="password" />
            <Button type="submit" iconSrc={arrow_right_icon}>
              sign up
            </Button>
          </Form>
        )}
      </Formik>
    </AuthViewTemplate>
  );
};

export default SignUp;
