import React from 'react';
import Button from 'components/button/Button';

const SecondStep: React.FC<SecondStepProps> = ({ setCurrentStep }) => {
  return (
    <div>
      <div>SecondStep.tsx</div>
      <Button type="button" onClick={() => setCurrentStep(3)}>
        next
      </Button>
    </div>
  );
};

interface SecondStepProps {
  setCurrentStep: (step: number) => void;
}

export default SecondStep;
