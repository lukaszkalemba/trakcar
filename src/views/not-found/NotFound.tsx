import React from 'react';
import { useSelector } from 'react-redux';
import { usersSelector } from 'modules/users';
import calendar_icon from 'assets/svgs/icon_calendar-black.svg';
import arrow_icon from 'assets/svgs/icon_arrow-right-black.svg';
import AuthViewTemplate from 'templates/auth-view-template/AuthViewTemplate';
import Seo from 'components/seo/Seo';
import Layout from 'components/layout/Layout';
import Heading from 'components/heading/Heading';
import Button from 'components/button/Button';
import styles from './NotFound.module.scss';

const NotFound: React.FC = () => {
  const { token } = useSelector(usersSelector);

  if (token) {
    return (
      <>
        <Seo title="404" />

        <Layout>
          <div className={styles.wrapper}>
            <Heading className={styles.heading}>Page not found.</Heading>
            <Button type="link" to="/" icon={calendar_icon}>
              Back home
            </Button>
          </div>
        </Layout>
      </>
    );
  }

  return (
    <>
      <Seo title="404" />

      <AuthViewTemplate>
        <Heading className={styles.unauthorizedHeading}>
          Page not found.
        </Heading>
        <Button
          type="link"
          to="/sign-in"
          icon={arrow_icon}
          className={styles.link}
        >
          sign in
        </Button>
      </AuthViewTemplate>
    </>
  );
};

export default NotFound;
