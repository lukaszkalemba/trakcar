import React from 'react';
import { useSelector } from 'react-redux';
import { positionsSelector, Position } from 'modules/positions';
import arrow_right_icon from 'assets/svgs/icon_arrow-right-black.svg';
import * as Inputs from 'components/inputs/Inputs';
import Button from 'components/button/Button';

const SecondStep: React.FC<SecondStepProps> = ({ setCurrentStep }) => {
  const { positions } = useSelector(positionsSelector);

  return (
    <>
      <Inputs.Select label="position" name="positionId">
        {(positions as Position[]).map((position) => (
          <option key={position._id} value={position._id}>
            {position.name}
          </option>
        ))}
      </Inputs.Select>
      <Inputs.Date label="date" name="date" />
      <Inputs.Time label="start time" name="startTime" step={3600} />
      <Inputs.Time label="end time" name="endTime" step={3600} />
      <Button
        type="button"
        icon={arrow_right_icon}
        onClick={() => setCurrentStep(3)}
      >
        next
      </Button>
    </>
  );
};

interface SecondStepProps {
  setCurrentStep: (step: number) => void;
}

export default SecondStep;
