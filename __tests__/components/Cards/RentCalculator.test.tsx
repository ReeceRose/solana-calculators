import { render } from '@testing-library/react';

import RentCalculatorCard from '../../../components/Cards/RentCalculator';

test('RentCalculator card component matches snapshot', () => {
  const { asFragment } = render(<RentCalculatorCard />);
  expect(asFragment()).toMatchSnapshot();
});

// TODO: add some tests for new methods
