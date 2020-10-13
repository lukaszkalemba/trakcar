import React from 'react';
import AuthViewTemplate from 'templates/auth-view-template/AuthViewTemplate';
import Button from 'components/button/Button';

const Signup: React.FC = () => {
  return (
    <AuthViewTemplate>
      <div>
        <h1>Signup.js</h1>
        <Button type="submit">sign up</Button>
      </div>
    </AuthViewTemplate>
  );
};

export default Signup;
