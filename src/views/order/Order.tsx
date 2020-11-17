import React from 'react';
import { Link } from 'react-router-dom';
import { Order as OrderProps } from 'modules/orders';
import Layout from 'components/layout/Layout';
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
  console.log(color);

  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.sidebar}>
          <Link to="/">Back</Link>
          <button type="button" onClick={() => console.log(_id)}>
            Bin
          </button>
        </div>

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
