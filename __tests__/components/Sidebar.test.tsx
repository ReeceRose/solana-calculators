import { render } from '@testing-library/react';

import Sidebar from '../../components/Sidebar';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/calculators/rent-calculator',
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
