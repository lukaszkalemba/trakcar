import React from 'react';
import { useSelector } from 'react-redux';
import { organizationsSelector } from 'modules/organizations';
import { usersSelector } from 'modules/users';
import delete_icon from 'assets/svgs/icon_delete.svg';
import Button from 'components/button/Button';
import Organization from './organization/Organization';
import Members from './members/Members';
import styles from './OrganizationInfo.module.scss';

const OrganizationInfo: React.FC = () => {
  const { organization } = useSelector(organizationsSelector);
  const { user } = useSelector(usersSelector);

  const isAdmin = user?._id === organization?.admin;
  const userType = isAdmin ? 'admin' : 'standard user';

  const organizationMembers = organization?.members.filter(
    (member) => member.email !== user?.email
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.organizationWrapper}>
        <Organization name={organization?.name} userType={userType} />

        <Members
          members={organizationMembers}
          organizationName={organization?.name}
        />
      </div>

      {isAdmin && (
        <Button className={styles.deleteButton} icon={delete_icon}>
          delete {organization?.name}
        </Button>
      )}
    </div>
  );
};

export default OrganizationInfo;
