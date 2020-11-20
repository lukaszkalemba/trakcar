import React, { ReactNode } from 'react';
import cx from 'classnames';
import bin_icon from 'assets/svgs/icon_bin-red.svg';
import Button from 'components/button/Button';
import styles from './DeleteButton.module.scss';

const DeleteButton: React.FC<DeleteButtonProps> = ({
  onClick,
  className,
  children,
}) => {
  return (
    <Button
      className={cx(styles.button, className)}
      icon={bin_icon}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

interface DeleteButtonProps {
  children: ReactNode;
  className?: string;
  onClick: () => void;
}

export default DeleteButton;
