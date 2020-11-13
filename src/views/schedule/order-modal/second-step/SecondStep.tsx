import React from 'react';

const SecondStep: React.FC<SecondStepProps> = ({ setCurrentStep }) => {
  return (
    <div>
      <div>SecondStep.tsx</div>
      <button type="button" onClick={() => setCurrentStep(3)}>
        next
      </button>
    </div>
  );
};

interface SecondStepProps {
  setCurrentStep: (step: number) => void;
}

export default SecondStep;
