import React from 'react';
import { Order as OrderProps } from 'modules/orders';
import Layout from 'components/layout/Layout';
import styles from './Order.module.scss';

const Order: React.FC<OrderProps> = ({
  _id,
  positionId,
  name,
  principalName,
  carBrand,
  carModel,
  cost,
  color,
  description,
  date,
  endTime,
  startTime,
}) => {
  console.log(_id);
  console.log(positionId);
  console.log(name);
  console.log(principalName);
  console.log(carBrand);
  console.log(carModel);
  console.log(cost);
  console.log(color);
  console.log(description);
  console.log(date);
  console.log(endTime);
  console.log(startTime);

  return (
    <Layout>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{name}</h1>
      </div>
    </Layout>
  );
};

export default Order;
