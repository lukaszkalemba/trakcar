import React from 'react';
import Button from 'components/button/Button';

const FirstStep: React.FC<FirstStepProps> = ({ setCurrentStep }) => {
  return (
    <div>
      <div>FirstStep.tsx</div>
      <Button type="button" onClick={() => setCurrentStep(2)}>
        next
      </Button>
    </div>
  );
};

interface FirstStepProps {
  setCurrentStep: (step: number) => void;
}

export default FirstStep;
