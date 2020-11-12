import React, { ReactNode } from 'react';
import logo from 'assets/svgs/logo_trakcar.svg';
import Icon from 'components/icon/Icon';
import LoadingSpinner from 'components/loading-spinner/LoadingSpinner';
import PageToggle from './page-toggle/PageToggle';
import styles from './AuthViewTemplate.module.scss';

const AuthViewTemplate: React.FC<AuthViewTemplateProps> = ({
  loading,
  pageToggleMessage,
  children,
}) => {
  return (
    <div className={styles.wrapper}>
      <main>
        <PageToggle messageSchema={pageToggleMessage} />

        <div className={styles.board}>
          <Icon className={styles.logo} src={logo} />
          {children}
          {loading && <LoadingSpinner className={styles.loadingSpinner} />}
        </div>
      </main>
    </div>
  );
};

export interface PageToggleMessage {
  messageText: string;
  linkPath: string;
  linkText: string;
}

interface AuthViewTemplateProps {
  loading: boolean;
  pageToggleMessage: PageToggleMessage;
  children: ReactNode;
}

export default AuthViewTemplate;
