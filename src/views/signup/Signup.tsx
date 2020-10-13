import React from 'react';
import { Formik, Form } from 'formik';
import AuthViewTemplate from 'templates/auth-view-template/AuthViewTemplate';
import Button from 'components/button/Button';
import { initialValues, validationSchema, onSubmit } from './Signup.formik';
import styles from './Signup.module.scss';

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
            <Button type="submit" className={styles.submit}>
              sign up
            </Button>
          </Form>
        )}
      </Formik>
    </AuthViewTemplate>
  );
};

export default Signup;
