import React from 'react';
import { useSelector } from 'react-redux';
import { organizationsSelector, Member } from 'modules/organizations';
import { usersSelector } from 'modules/users';

const OrganizationInfo: React.FC = () => {
  const { organization } = useSelector(organizationsSelector);
  const { user } = useSelector(usersSelector);

  const isAdmin = user?._id === organization?.admin;
  const userType = isAdmin ? 'admin' : 'standard user';

  const organizationMembers = organization?.members.filter(
    (member) => member.email !== user?.email
  );

  return (
    <div>
      <h1>{organization?.name}</h1>
      <p>{userType}</p>
      {organizationMembers?.length ? (
        <>
          <h2>Other members</h2>
          <ul>
            {(organizationMembers as Member[]).map((member) => (
              <li key={member.email}>{member}</li>
            ))}
          </ul>
        </>
      ) : (
        <h2>You are an only member of the {organization?.name}.</h2>
      )}

      {isAdmin && <button>delete {organization?.name}</button>}
    </div>
  );
};

export default OrganizationInfo;
