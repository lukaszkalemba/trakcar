import React from 'react';
import arrow_right_icon from 'assets/svgs/icon_arrow-right-black.svg';
import Button from 'components/button/Button';

const NextStepButton: React.FC<NextStepButtonProps> = ({ setCurrentStep }) => {
  const moveToNextStep = () => {
    setCurrentStep((step: number) => step + 1);
  };

  return (
    <Button type="submit" icon={arrow_right_icon} onClick={moveToNextStep}>
      next
    </Button>
  );
};

interface NextStepButtonProps {
  setCurrentStep: (callback: (step: number) => number) => void;
}

export default NextStepButton;
