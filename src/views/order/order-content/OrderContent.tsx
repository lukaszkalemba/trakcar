import React from 'react';
import { createUseStyles } from 'react-jss';
import cx from 'classnames';
import { Order } from 'modules/orders';
import { getOrderColors } from 'helpers/getOrderColors';
import Sidebar from './sidebar/Sidebar';
import Time from './time/Time';
import Name from './name/Name';
import Car from './car/Car';
import Description from './description/Description';
import styles from './OrderContent.module.scss';

const OrderContent: React.FC<Order> = ({
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
    <div className={wrapperClass}>
      <Sidebar positionId={_id} color={color} />

      <div className={styles.content}>
        <Time startTime={startTime} endTime={endTime} date={date} />
        <Name>{orderName}</Name>
        <Car
          brand={carBrand}
          model={carModel}
          principal={principalName}
          cost={cost}
        />
        <Description text={description} />
      </div>
    </div>
  );
};

export default OrderContent;
