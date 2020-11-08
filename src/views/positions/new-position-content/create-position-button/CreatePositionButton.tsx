import React, { ReactNode } from 'react';
import cx from 'classnames';
import icon_plus from 'assets/svgs/icon_circle-plus.svg';
import Button from 'components/button/Button';
import styles from './CreatePositionButton.module.scss';

const CreatePositionButton: React.FC<CreatePositionButtonProps> = ({
  children,
  onClick,
  noPosition,
}) => {
  const buttonClass = cx(styles.button, {
    [styles.noPosition]: noPosition,
  });

  return (
    <Button className={buttonClass} icon={icon_plus} onClick={onClick}>
      {children}
    </Button>
  );
};

interface CreatePositionButtonProps {
  children: ReactNode;
  onClick: () => void;
  noPosition?: boolean;
}

export default CreatePositionButton;
