import React, { ReactNode } from 'react';
import icon_plus from 'assets/svgs/icon_circle-plus.svg';
import Button from 'components/button/Button';
import styles from './CreatePositionButton.module.scss';

const CreatePositionButton: React.FC<CreatePositionButtonProps> = ({
  children,
}) => {
  return (
    <Button className={styles.button} icon={icon_plus}>
      {children}
    </Button>
  );
};

interface CreatePositionButtonProps {
  children: ReactNode;
}

export default CreatePositionButton;
