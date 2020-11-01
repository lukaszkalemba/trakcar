import React from 'react';
import { useSelector } from 'react-redux';
import { organizationsSelector, Member } from 'modules/organizations';
import { usersSelector } from 'modules/users';
import delete_icon from 'assets/svgs/icon_delete.svg';
import Button from 'components/button/Button';
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
        <div className={styles.organization}>
          <h2 className={styles.organizationName}>{organization?.name}</h2>
          <p className={styles.userType}>{userType}</p>
        </div>

        <div className={styles.members}>
          {organizationMembers?.length ? (
            <>
              <h2 className={styles.membersHeading}>Other members</h2>
              <ul>
                {(organizationMembers as Member[]).map((member) => (
                  <li key={member.email}>{member.name}</li>
                ))}
              </ul>
            </>
          ) : (
            <h2 className={styles.noMembersInfo}>
              You are an only member of {organization?.name}.
            </h2>
          )}
        </div>
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
