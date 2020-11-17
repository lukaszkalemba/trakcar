import React from 'react';
import { createUseStyles } from 'react-jss';
import cx from 'classnames';
import { format } from 'date-fns';
import { Order as OrderProps } from 'modules/orders';
import { getOrderColors } from 'helpers/getOrderColors';
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
  const orderColors = getOrderColors(color);

  const { dynamicStyles } = createUseStyles({
    dynamicStyles: {
      backgroundColor: orderColors.light,
    },
  })();

  const wrapperClass = cx(styles.wrapper, dynamicStyles);

  return (
    <Layout>
      <div className={wrapperClass}>
        <Sidebar positionId={_id} color={color} />

        <div className={styles.content}>
          <div className={styles.time}>
            <time>
              {startTime} - {endTime},{' '}
              <span className={styles.date}>
                {format(new Date(date), 'dd.MM.yyyy')}
              </span>
            </time>
          </div>

          <h1 className={styles.title}>{orderName}</h1>

          <div className={styles.car}>
            {carBrand} {carModel}, {principalName}, {cost}$
          </div>

          <div>
            <div className={styles.description}>{description}</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Order;
