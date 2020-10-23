import React from 'react';
import { render } from 'utils/test-utils';
import trakcar_logo from 'assets/svgs/logo_trakcar.svg';
import Icon from './Icon';

describe('<Icon />', () => {
  it('matches snapshot', () => {
    const { container } = render(<Icon src={trakcar_logo} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
