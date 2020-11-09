import React from 'react';
import Layout from 'components/layout/Layout';
import styles from './Schedule.module.scss';

const Schedule: React.FC = () => {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <h1>Schedule.js</h1>
      </div>
    </Layout>
  );
};

export default Schedule;
