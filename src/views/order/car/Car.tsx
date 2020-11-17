import React from 'react';
import styles from './Car.module.scss';

const Car: React.FC<CarProps> = ({ brand, model, principal, cost }) => {
  return (
    <div className={styles.wrapper}>
      {brand} {model}, {principal} - {cost}$
    </div>
  );
};

interface CarProps {
  brand: string;
  model: string;
  principal: string;
  cost: number;
}

export default Car;
