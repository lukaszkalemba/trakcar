import React from 'react';
import Button from 'components/button/Button';

const FirstStep: React.FC<FirstStepProps> = ({ setCurrentStep }) => {
  return (
    <>
      <Button type="button" onClick={() => setCurrentStep(2)}>
        next
      </Button>
    </>
  );
};

interface FirstStepProps {
  setCurrentStep: (step: number) => void;
}

export default FirstStep;
