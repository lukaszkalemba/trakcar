import React, { ReactNode } from 'react';
import Icon from 'components/icon/Icon';
import logo from 'assets/svgs/logo_trakcar.svg';
import styles from './AuthViewTemplate.module.scss';

const AuthViewTemplate: React.FC<AuthViewTemplateProps> = ({
  togglePageMessage,
  children,
}) => {
  return (
    <div className={styles.wrapper}>
      <main>
        {togglePageMessage}
        <div className={styles.board}>
          <Icon src={logo} />
          {children}
        </div>
      </main>
    </div>
  );
};

interface AuthViewTemplateProps {
  children: ReactNode;
  togglePageMessage: ReactNode;
}

export default AuthViewTemplate;
