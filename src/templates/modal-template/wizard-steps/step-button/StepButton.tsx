import React from 'react';
import cx from 'classnames';
import styles from './StepButton.module.scss';

const StepButton: React.FC<StepButtonProps> = ({
  stepNumber,
  stepTitle,
  currentStep,
  setCurrentStep,
  isLast,
}) => {
  const wrapperClass = cx(styles.wrapper, {
    [styles.last]: isLast,
  });

  const buttonClass = cx(styles.button, {
    [styles.active]: currentStep === stepNumber,
  });

  return (
    <div className={wrapperClass}>
      <button
        type="button"
        className={buttonClass}
        onClick={() => setCurrentStep(stepNumber)}
      >
        {stepNumber}
      </button>
      <p className={styles.title}>{stepTitle}</p>
    </div>
  );
};

interface StepButtonProps {
  stepNumber: number;
  stepTitle: string;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  isLast: boolean;
}

export default StepButton;
