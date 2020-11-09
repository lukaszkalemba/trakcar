import React from 'react';
import Layout from 'components/layout/Layout';
import ButtonsActions from './buttons-actions/ButtonsActions';
import styles from './Schedule.module.scss';

const Schedule: React.FC = () => {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <ButtonsActions />
      </div>
    </Layout>
  );
};

export default Schedule;
