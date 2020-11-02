import React from 'react';
import { PositionData } from 'modules/positions';
import delete_icon from 'assets/svgs/icon_delete-black.svg';
import edit_icon from 'assets/svgs/icon_edit.svg';
import Icon from 'components/icon/Icon';
import styles from './PositionsList.module.scss';

const PositionsList: React.FC<PositionsListProps> = ({ positions }) => {
  return (
    <ul className={styles.list}>
      {positions.map((position) => (
        <li key={position._id} className={styles.listItem}>
          <h2 className={styles.name}>{position.name}</h2>

          <div className={styles.timeWrapper}>
            <time>{position.startTime}</time> - <time>{position.endTime}</time>
          </div>

          <div className={styles.buttonsWrapper}>
            <button>
              <Icon src={edit_icon} />
            </button>
            <button>
              <Icon src={delete_icon} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

interface PositionsListProps {
  positions: PositionData[];
}

export default PositionsList;
