import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import arrow_right_icon from 'assets/svgs/icon_arrow-right-black.svg';
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
  if (type === 'link') {
    return (
      <Link to={to as string} className={cx(styles.link, className)}>
        <span>{children}</span>
        {icon && <Icon src={icon} />}
      </Link>
    );
  }

  if (type === 'submit') {
    return (
      <button type="submit" className={cx(styles.submit, className)}>
        <span>{children}</span>
        <Icon src={arrow_right_icon} />
      </button>
    );
  }

  return (
    <button
      type="button"
      className={cx(styles.button, className)}
      onClick={onClick}
    >
      <span>{children}</span>
      {icon && <Icon src={icon} />}
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
