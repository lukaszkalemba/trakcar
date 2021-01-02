import React, { memo } from 'react';
import { Member } from 'modules/organizations';
import styles from './Members.module.scss';

const Members: React.FC<MembersProps> = ({ members, organizationName }) => {
  return (
    <div className={styles.members}>
      {members?.length ? (
        <>
          <h2 className={styles.membersHeading}>Other members</h2>
          <ul>
            {members.map((member) => (
              <li key={member.email}>{member.name}</li>
            ))}
          </ul>
        </>
      ) : (
        <h2 className={styles.noMembersInfo}>
          You are an only member of {organizationName}.
        </h2>
      )}
    </div>
  );
};

interface MembersProps {
  members?: Member[];
  organizationName?: string;
}

export default memo(Members);
