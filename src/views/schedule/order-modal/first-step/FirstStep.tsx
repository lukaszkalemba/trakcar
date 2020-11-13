import React from 'react';

const FirstStep: React.FC<FirstStepProps> = ({ setCurrentStep }) => {
  return (
    <div>
      <div>FirstStep.tsx</div>
      <button type="button" onClick={() => setCurrentStep(2)}>
        next
      </button>
    </div>
  );
};

interface FirstStepProps {
  setCurrentStep: (step: number) => void;
}

export default FirstStep;
