import React from 'react';
import Layout from 'components/layout/Layout';

const Order = ({ ...props }) => {
  console.log(props);

  return (
    <Layout>
      <div>Order.tsx</div>
    </Layout>
  );
};

export default Order;
