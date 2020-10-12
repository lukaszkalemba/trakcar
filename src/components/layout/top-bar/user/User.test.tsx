import React from 'react';
import { render } from '@testing-library/react';
import User from './User';

describe('<User />', () => {
  it('renders with user avatar inside', () => {
    const { getByAltText } = render(<User />);

    expect(getByAltText('user avatar')).toBeInTheDocument();
  });
});
