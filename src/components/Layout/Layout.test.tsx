import React from 'react';
import { render } from '@testing-library/react';
import Layout, { LayoutProps } from './Layout';

const renderLayout = (props: LayoutProps) => {
  const utils = render(<Layout {...props} />);

  return { ...utils };
};

describe('<Layout />', () => {
  const baseProps = {
    children: <h1>Fake heading</h1>,
  };

  it('renders with user avatar inside', () => {
    const { getByAltText } = renderLayout(baseProps);

    expect(getByAltText('user avatar')).toBeInTheDocument();
  });

  it('renders with proper children inside', () => {
    const { getByText } = renderLayout(baseProps);

    expect(getByText(/fake heading/i)).toBeInTheDocument();
  });
});
