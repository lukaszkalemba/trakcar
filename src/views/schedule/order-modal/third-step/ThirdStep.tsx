import React from 'react';
import * as Inputs from 'components/inputs/Inputs';
import Button from 'components/button/Button';

const ThirdStep: React.FC = () => {
  return (
    <>
      <Inputs.Select label="highlight color" name="orderColor">
        <option value="red">red</option>
        <option value="orange">orange</option>
        <option value="green">green</option>
        <option value="violet">violet</option>
        <option value="blue">blue</option>
      </Inputs.Select>
      <Inputs.Number label="order cost ( $ )" name="cost" min={0} />
      <Inputs.Textarea label="order description" name="description" rows={6} />
      <Button type="submit">submit</Button>
    </>
  );
};

export default ThirdStep;
