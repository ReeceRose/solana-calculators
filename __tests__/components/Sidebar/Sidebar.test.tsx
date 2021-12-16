/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';

import Sidebar from '../../../components/Sidebar/Sidebar';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

test('Sidebar component matches snapshot', () => {
  const { asFragment } = render(<Sidebar />);
  expect(asFragment()).toMatchSnapshot();
});
