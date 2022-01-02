import { render } from '@testing-library/react';

import CurrencyCard from '../../../components/Cards/Currency';

test('Currency card component matches snapshot', () => {
  const { asFragment } = render(<CurrencyCard />);
  expect(asFragment()).toMatchSnapshot();
});
