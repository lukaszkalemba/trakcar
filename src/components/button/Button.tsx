import React, { ReactNode } from 'react';
import Icon from 'components/icon/Icon';
import cx from 'classnames';
import styles from './Button.module.scss';

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  iconSrc,
  className,
  onClick = () => {},
  children,
}) => {
  const buttonClass = cx(className, {
    [styles.button]: type === 'button',
    [styles.submit]: type === 'submit',
  });

  return (
    <button type={type} className={buttonClass} onClick={onClick}>
      {children}
      {iconSrc && <Icon src={iconSrc} />}
    </button>
  );
};

interface ButtonProps {
  type?: 'button' | 'submit';
  iconSrc?: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

export default Button;
