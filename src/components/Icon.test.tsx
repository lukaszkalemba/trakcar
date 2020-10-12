import React from 'react';
import { render } from '@testing-library/react';
import logo from 'assets/svgs/logo_trakcar.svg';
import Icon from './Icon';

describe('<Icon />', () => {
  it('matches snapshot', () => {
    const { container } = render(<Icon src={logo} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
