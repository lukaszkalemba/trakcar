import React from 'react';
import Button from 'components/button/Button';

const SecondStep: React.FC<SecondStepProps> = ({ setCurrentStep }) => {
  return (
    <>
      <Button type="button" onClick={() => setCurrentStep(3)}>
        next
      </Button>
    </>
  );
};

interface SecondStepProps {
  setCurrentStep: (step: number) => void;
}

export default SecondStep;
