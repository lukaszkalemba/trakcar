import React from 'react';
import * as Inputs from 'components/inputs/Inputs';
import Button from 'components/button/Button';

const ThirdStep: React.FC = () => {
  return (
    <>
      <Inputs.Select label="highlight color" name="color">
        <option value={0}>red</option>
        <option value={1}>orange</option>
        <option value={2}>green</option>
        <option value={3}>violet</option>
        <option value={4}>blue</option>
      </Inputs.Select>
      <Inputs.Number label="cost ( $ )" name="cost" min={0} />
      <Inputs.Textarea label="description" name="description" rows={5} />
      <Button type="submit">submit</Button>
    </>
  );
};

export default ThirdStep;
