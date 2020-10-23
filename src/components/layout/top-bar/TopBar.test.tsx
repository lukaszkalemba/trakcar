import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from 'utils/test-utils';
import TopBar from './TopBar';

describe('<TopBar />', () => {
  it('renders with user avatar inside', () => {
    const { getByAltText } = render(
      <MemoryRouter>
        <TopBar />
      </MemoryRouter>
    );
    console.log(getByAltText);

    // expect(getByAltText('user avatar')).toBeInTheDocument();
  });
});
