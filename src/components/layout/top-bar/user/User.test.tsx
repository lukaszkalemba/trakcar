import React from 'react';
import { render } from 'utils/test-utils';
import User from './User';

describe('<User />', () => {
  it('renders with user avatar inside', () => {
    const { getByAltText } = render(<User />);

    expect(getByAltText('user avatar')).toBeInTheDocument();
  });
});
