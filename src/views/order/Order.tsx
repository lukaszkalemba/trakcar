import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ordersSelector, getAllOrders } from 'modules/orders';
import Layout from 'components/layout/Layout';
import LoadingSpinner from 'components/loading-spinner/LoadingSpinner';
import OrderContent from './order-content/OrderContent';
import styles from './Order.module.scss';

const Order: React.FC<OrderProps> = ({ match }) => {
  const dispatch = useDispatch();
  const { loading, orders } = useSelector(ordersSelector);

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  const selectedOrder = orders?.find((order) => order._id === match.params.id);

  if (loading) {
    return (
      <Layout>
        <div className={styles.wrapper}>
          <LoadingSpinner />
        </div>
      </Layout>
    );
  }

  if (!selectedOrder) {
    return <Redirect to="/404" />;
  }

  return (
    <Layout>
      <OrderContent {...selectedOrder} />
    </Layout>
  );
};

interface OrderProps {
  match: {
    params: {
      id: string;
    };
  };
}

export default Order;
