import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/icon/Icon';
import cx from 'classnames';
import styles from './Button.module.scss';

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  iconSrc,
  to,
  className,
  onClick,
  children,
}) => {
  const buttonClass = cx(className, {
    [styles.button]: type === 'button',
    [styles.submit]: type === 'submit',
    [styles.link]: type === 'link',
  });

  const content = (
    <>
      {children}
      {iconSrc && <Icon src={iconSrc} />}
    </>
  );

  if (type === 'link') {
    return (
      <Link to={to as string} className={buttonClass}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type as 'button' | 'submit'}
      className={buttonClass}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

interface ButtonProps {
  type?: 'button' | 'submit' | 'link';
  iconSrc?: string;
  to?: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

export default Button;
