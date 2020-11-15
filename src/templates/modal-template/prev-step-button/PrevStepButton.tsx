import React from 'react';
import cx from 'classnames';
import arrow_icon from 'assets/svgs/icon_arrow-left-black.svg';
import Icon from 'components/icon/Icon';
import { Wizard } from '../ModalTemplate';
import styles from './PrevStepButton.module.scss';

const PrevStepButton: React.FC<WizardProps> = ({ wizard }) => {
  const backToPreviousStep = () => {
    wizard.setCurrentStep(wizard.currentStep - 1);
  };

  const buttonClass = cx(styles.button, {
    [styles.hidden]: wizard.currentStep === 1,
  });

  return (
    <button type="button" className={buttonClass} onClick={backToPreviousStep}>
      <Icon src={arrow_icon} />
    </button>
  );
};

interface WizardProps {
  wizard: Wizard;
}

export default PrevStepButton;
