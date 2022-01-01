import { render } from '@testing-library/react';

import CurrencyConverter from '../../../pages/converters/currency';

test('converters/currency page matches snapshot', () => {
  const { asFragment } = render(<CurrencyConverter />);
  expect(asFragment()).toMatchSnapshot();
});
