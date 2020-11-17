import React from 'react';
import { createUseStyles } from 'react-jss';
import cx from 'classnames';
import { getOrderColors } from 'helpers/getOrderColors';
import BackLink from './back-link/BackLink';
import DeleteButton from './delete-button/DeleteButton';
import styles from './Sidebar.module.scss';

const Sidebar: React.FC<SidebarProps> = ({ positionId, color }) => {
  const orderColors = getOrderColors(color);

  const { dynamicStyles } = createUseStyles({
    dynamicStyles: {
      backgroundColor: orderColors.dark,
    },
  })();

  const wrapperClass = cx(styles.wrapper, dynamicStyles);

  return (
    <div className={wrapperClass}>
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
