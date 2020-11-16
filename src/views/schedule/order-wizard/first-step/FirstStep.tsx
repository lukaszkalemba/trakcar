import React from 'react';
import arrow_right_icon from 'assets/svgs/icon_arrow-right-black.svg';
import * as Inputs from 'components/inputs/Inputs';
import Button from 'components/button/Button';

const FirstStep: React.FC<FirstStepProps> = ({ setCurrentStep }) => {
  return (
    <>
      <Inputs.Text label="order name" name="name" />
      <Inputs.Text label="car brand" name="carBrand" />
      <Inputs.Text label="car model" name="carModel" />
      <Inputs.Text label="principal name" name="principalName" />
      <Button
        type="button"
        icon={arrow_right_icon}
        onClick={() => setCurrentStep((step: number) => step + 1)}
      >
        next
      </Button>
    </>
  );
};

interface FirstStepProps {
  setCurrentStep: (step: (state: number) => number) => void;
}

export default FirstStep;
