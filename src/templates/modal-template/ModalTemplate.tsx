import React, { ReactNode } from 'react';
import cx from 'classnames';
import WizardSteps from './wizard-steps/WizardSteps';
import CloseButton from './close-button/CloseButton';
import styles from './ModalTemplate.module.scss';

const ModalTemplate: React.FC<ModalTemplateProps> = ({
  wizard,
  closeModal,
  className,
  children,
}) => {
  return (
    <div className={styles.backdrop}>
      {wizard && <WizardSteps wizard={wizard} />}
      <div className={cx(styles.board, className)}>
        <CloseButton closeModal={closeModal} />
        {children}
      </div>
    </div>
  );
};

export interface Step {
  stepNumber: number;
  stepTitle: string;
}

export interface Wizard {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  steps: Step[];
}

interface ModalTemplateProps {
  wizard?: Wizard;
  closeModal: () => void;
  className?: string;
  children: ReactNode;
}

export default ModalTemplate;
