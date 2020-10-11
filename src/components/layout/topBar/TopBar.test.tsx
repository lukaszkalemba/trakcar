import React from 'react';
import { render } from '@testing-library/react';
import TopBar from '../TopBar';

describe('<TopBar />', () => {
  it('renders correctly', () => {
    const { debug } = render(<TopBar />);

    debug();
  });
});
