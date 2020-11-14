import React from 'react';
import { Wizard } from '../ModalTemplate';
import StepButton from './step-button/StepButton';
import styles from './WizardSteps.module.scss';

const WizardSteps: React.FC<WizardStepsProps> = ({ wizard }) => {
  return (
    <div className={styles.wrapper}>
      {wizard.steps.map(({ stepNumber, stepTitle }) => (
        <StepButton
          key={stepNumber}
          stepNumber={stepNumber}
          stepTitle={stepTitle}
          currentStep={wizard.currentStep}
          setCurrentStep={wizard.setCurrentStep}
          isLast={wizard.steps.length === stepNumber}
        />
      ))}
    </div>
  );
};

interface WizardStepsProps {
  wizard: Wizard;
}

export default WizardSteps;
