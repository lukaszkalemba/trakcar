import React from 'react';
import { useSelector } from 'react-redux';
import { ordersSelector, Order as OrderSchema } from 'modules/orders';
import Order from './order/Order';

const Orders: React.FC = () => {
  const { orders } = useSelector(ordersSelector);

  return (
    <>
      {(orders as OrderSchema[]).map((order) => {
        return <Order key={order._id} order={order} />;
      })}
    </>
  );
};

export default Orders;
