import React from 'react';
import * as Inputs from 'components/inputs/Inputs';
import Button from 'components/button/Button';

const SecondStep: React.FC<SecondStepProps> = ({ setCurrentStep }) => {
  return (
    <>
      <Inputs.Text label="position" name="positionId" />
      <Inputs.Text label="prder date" name="orderDate" />
      <Inputs.Time label="start time" name="startWorkTime" step={3600} />
      <Inputs.Time label="end time" name="endWorkTime" step={3600} />
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
