import React from 'react';
import cx from 'classnames';
import styles from './WizardStep.module.scss';

const WizardStep: React.FC<WizardStepProps> = ({
  stepNumber,
  stepTitle,
  currentStep,
  isLast,
}) => {
  const wrapperClass = cx(styles.wrapper, {
    [styles.last]: isLast,
  });

  const numberClass = cx(styles.number, {
    [styles.active]: currentStep === stepNumber,
  });

  return (
    <div className={wrapperClass}>
      <span className={numberClass}>{stepNumber}</span>
      <p className={styles.title}>{stepTitle}</p>
    </div>
  );
};

interface WizardStepProps {
  stepNumber: number;
  stepTitle: string;
  currentStep: number;
  isLast: boolean;
}

export default WizardStep;
