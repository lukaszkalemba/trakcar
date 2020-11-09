import React from 'react';
import Layout from 'components/layout/Layout';
import Actions from './actions/Actions';
import styles from './Schedule.module.scss';

const Schedule: React.FC = () => {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <Actions />
      </div>
    </Layout>
  );
};

export default Schedule;
