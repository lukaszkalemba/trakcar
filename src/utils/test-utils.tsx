import React, { ReactNode, ReactElement, ComponentType } from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'utils/store';

const AllProviders: React.FC<AllProvidersProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

interface AllProvidersProps {
  children: ReactNode;
}

const customRender = (ui: ReactElement, options?: {}) =>
  render(ui, { wrapper: AllProviders as ComponentType, ...options });

export * from '@testing-library/react';

export { customRender as render };
