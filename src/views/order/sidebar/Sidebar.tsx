import React from 'react';
import { Link } from 'react-router-dom';
import arrow_icon from 'assets/svgs/icon_arrow-back.svg';
import Icon from 'components/icon/Icon';
import DeleteButton from './delete-button/DeleteButton';
import styles from './Sidebar.module.scss';

const Sidebar: React.FC<SidebarProps> = ({ positionId, color }) => {
  console.log(color);

  return (
    <div className={styles.sidebar}>
      <Link to="/">
        <Icon src={arrow_icon} />
      </Link>

      <DeleteButton positionId={positionId} />
    </div>
  );
};

interface SidebarProps {
  positionId: string;
  color: string;
}

export default Sidebar;
