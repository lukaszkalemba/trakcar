import React from 'react';
import { Wizard } from '../ModalTemplate';
import WizardStep from './wizard-step/WizardStep';
import styles from './WizardSteps.module.scss';

const WizardSteps: React.FC<WizardStepsProps> = ({ wizard }) => {
  return (
    <div className={styles.wrapper}>
      {wizard.steps.map(({ stepNumber, stepTitle }) => (
        <WizardStep
          key={stepNumber}
          stepNumber={stepNumber}
          stepTitle={stepTitle}
          currentStep={wizard.currentStep}
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
