import React from 'react';
import arrow_right_icon from 'assets/svgs/icon_arrow-right-black.svg';
import Button from 'components/button/Button';

const ThirdStep: React.FC = () => {
  return (
    <div>
      <div>ThirdStep.tsx</div>
      <Button type="submit" icon={arrow_right_icon}>
        submit
      </Button>
    </div>
  );
};

export default ThirdStep;
