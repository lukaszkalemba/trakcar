import React from 'react';
import * as Inputs from 'components/inputs/Inputs';
import Button from 'components/button/Button';

const ThirdStep: React.FC = () => {
  return (
    <>
      <Inputs.Text label="highlight color" name="orderColor" />
      <Inputs.Text label="order cost" name="cost" />
      <Inputs.Text label="Opis zlecenia" name="description" />
      <Button type="submit">submit</Button>
    </>
  );
};

export default ThirdStep;
