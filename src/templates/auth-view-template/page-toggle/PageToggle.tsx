import React from 'react';
import { Link } from 'react-router-dom';
import { PageToggleMessage } from '../AuthViewTemplate';
import styles from './PageToggle.module.scss';

const PageToggle: React.FC<PageToggleProps> = ({ messageSchema }) => {
  return (
    <p className={styles.paragraph}>
      {messageSchema.messageText}{' '}
      <Link to={messageSchema.linkPath}>{messageSchema.linkText}</Link>
    </p>
  );
};

interface PageToggleProps {
  messageSchema: PageToggleMessage;
}

export default PageToggle;
