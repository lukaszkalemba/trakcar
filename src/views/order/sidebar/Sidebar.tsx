import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.scss';

const Sidebar: React.FC<SidebarProps> = ({ positionId, color }) => {
  console.log(color);

  return (
    <div className={styles.sidebar}>
      <Link to="/">Back</Link>
      <button type="button" onClick={() => console.log(positionId)}>
        Bin
      </button>
    </div>
  );
};

interface SidebarProps {
  positionId: string;
  color: string;
}

export default Sidebar;
