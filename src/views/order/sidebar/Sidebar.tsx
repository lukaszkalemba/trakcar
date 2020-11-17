import React from 'react';
import BackLink from './back-link/BackLink';
import DeleteButton from './delete-button/DeleteButton';
import styles from './Sidebar.module.scss';

const Sidebar: React.FC<SidebarProps> = ({ positionId, color }) => {
  console.log(color);

  return (
    <div className={styles.sidebar}>
      <BackLink />
      <DeleteButton positionId={positionId} />
    </div>
  );
};

interface SidebarProps {
  positionId: string;
  color: string;
}

export default Sidebar;
