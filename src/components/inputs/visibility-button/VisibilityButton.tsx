import React from 'react';
import Icon from 'components/icon/Icon';
import visible_icon from 'assets/svgs/icon_eye-visible.svg';
import invisible_icon from 'assets/svgs/icon_eye-invisible.svg';
import styles from './VisibilityButton.module.scss';

const VisibilityButton: React.FC<VisibilityButtonProps> = ({
  name,
  isPasswordVisible,
  togglePasswordVisibility,
}) => {
  return (
    <button
      type="button"
      aria-controls={name}
      aria-expanded={isPasswordVisible}
      onClick={togglePasswordVisibility}
      className={styles.visibilityButton}
    >
      <Icon src={isPasswordVisible ? invisible_icon : visible_icon} />
    </button>
  );
};

interface VisibilityButtonProps {
  name: string;
  isPasswordVisible: boolean;
  togglePasswordVisibility: () => void;
}

export default VisibilityButton;
