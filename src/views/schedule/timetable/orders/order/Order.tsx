import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import cx from 'classnames';
import { Order as OrderSchema } from 'modules/orders';
import { calendarDatesSelector } from 'modules/calendar-dates';
import { generateGridRow } from 'helpers/generateGridRow';
import { generateGridColumn } from 'helpers/generateGridColumn';
import { getOrderColors } from 'helpers/getOrderColors';
import styles from './Order.module.scss';

const Order: React.FC<OrderProps> = ({ order }) => {
  const { positionId, startTime, endTime, date, orderName, color } = order;

  const { selectedDate } = useSelector(calendarDatesSelector);

  const gridRowStart = generateGridRow(startTime);
  const gridRowEnd = generateGridRow(endTime);
  const gridColumnStart = generateGridColumn(positionId);

  const orderColors = getOrderColors(color);

  const { dynamicStyles } = createUseStyles({
    dynamicStyles: {
      gridColumnStart,
      gridRowStart,
      gridRowEnd,
      backgroundColor: orderColors.light,
      color: orderColors.dark,
    },
  })();

  const isVisible = selectedDate === date;

  const orderClass = cx(styles.order, dynamicStyles, {
    [styles.hidden]: !isVisible,
  });

  return (
    <div className={orderClass}>
      <Link to={`/orders/${order._id}`} className={styles.link}>
        <span className={styles.name}>{orderName}</span>
      </Link>
    </div>
  );
};

interface OrderProps {
  order: OrderSchema;
}

export default Order;
