import React from 'react';
// import { useSelector } from 'react-redux';
// import { mocked } from 'ts-jest/utils';
import { render } from 'utils/test-utils';
import User from './User';

// jest.mock('react-redux', () => ({
//   useSelector: jest.fn(),
// }));

describe('<User />', () => {
  // beforeEach(() => {
  //   mocked(useSelector).mockImplementation((callback: any) => {
  //     return callback({});
  //   });
  // });

  // afterEach(() => {
  //   mocked(useSelector).mockClear();
  // });

  it('renders with user avatar inside', async () => {
    const { debug } = render(<User />);

    debug();
  });
});
