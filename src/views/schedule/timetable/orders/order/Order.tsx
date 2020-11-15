import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import cx from 'classnames';
import { Order as OrderSchema } from 'modules/orders';
import { calendarDatesSelector } from 'modules/calendar-dates';
import { generateGridRow } from 'helpers/generateGridRow';
import { generateGridColumn } from 'helpers/generateGridColumn';
import styles from './Order.module.scss';

const Order: React.FC<OrderProps> = ({ order }) => {
  const { positionId, startTime, endTime, date, name } = order;

  const { selectedDate } = useSelector(calendarDatesSelector);

  const gridRowStart = generateGridRow(startTime);
  const gridRowEnd = generateGridRow(endTime);
  const gridColumnStart = generateGridColumn(positionId);

  const { dynamicStyles } = createUseStyles({
    dynamicStyles: {
      gridColumnStart,
      gridRowStart,
      gridRowEnd,
    },
  })();

  const isVisible = selectedDate === date;

  const orderClass = cx(styles.order, dynamicStyles, {
    [styles.hidden]: !isVisible,
  });

  return (
    <div className={orderClass}>
      <Link to={`/orders/${order._id}`} className={styles.link}>
        <span className={styles.name}>{name}</span>
      </Link>
    </div>
  );
};

interface OrderProps {
  order: OrderSchema;
}

export default Order;
