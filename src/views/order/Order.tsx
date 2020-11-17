import React from 'react';
import { Order as OrderProps } from 'modules/orders';
import Layout from 'components/layout/Layout';
import Sidebar from './sidebar/Sidebar';
import styles from './Order.module.scss';

const Order: React.FC<OrderProps> = ({
  _id,
  orderName,
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
  return (
    <Layout>
      <div className={styles.wrapper}>
        <Sidebar positionId={_id} color={color} />

        <div>
          <div>
            <span>
              <time>{startTime}</time> - <time>{endTime}</time>
              <time>{date}</time>
            </span>
          </div>
          <span>
            {carBrand} {carModel}
          </span>
          <h1 className={styles.title}>{orderName}</h1>
          <div>
            <div>{principalName}</div>
            <div>{cost}$</div>
            <div>{description}</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Order;
