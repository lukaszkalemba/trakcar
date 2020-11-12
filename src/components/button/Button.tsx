import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/icon/Icon';
import cx from 'classnames';
import styles from './Button.module.scss';

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  icon,
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
      <span>{children}</span>
      {icon && <Icon src={icon} />}
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
    /* eslint-disable react/button-has-type */
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
  icon?: string;
  to?: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

export default Button;
