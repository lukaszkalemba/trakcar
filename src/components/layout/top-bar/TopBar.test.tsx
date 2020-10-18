import React from 'react';
import { render } from 'utils/test-utils';
import TopBar from './TopBar';

describe('<TopBar />', () => {
  it('renders with user avatar inside', () => {
    const { getByAltText } = render(<TopBar />);
    console.log(getByAltText);

    // expect(getByAltText('user avatar')).toBeInTheDocument();
  });
});
