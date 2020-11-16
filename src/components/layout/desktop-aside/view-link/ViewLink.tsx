import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/icon/Icon';
import styles from './ViewLink.module.scss';

const ViewLink: React.FC<ViewLinkProps> = ({ to, icon, children }) => {
  return (
    <Link to={to} className={styles.link}>
      <Icon className={styles.icon} src={icon} />
      <span>{children}</span>
    </Link>
  );
};

interface ViewLinkProps {
  to: string;
  icon: string;
  children: ReactNode;
}

export default ViewLink;
