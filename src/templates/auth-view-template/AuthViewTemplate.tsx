import React, { ReactNode } from 'react';
import Icon from 'components/icon/Icon';
import logo from 'assets/svgs/logo_trakcar.svg';
import styles from './AuthViewTemplate.module.scss';

const AuthViewTemplate: React.FC<AuthViewTemplateProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <main>
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
}

export default AuthViewTemplate;
