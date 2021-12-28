import { render } from '@testing-library/react';

import RentCalculator from '../../../pages/calculators/rent-calculator';

test('calculators/rent-calculators page matches snapshot', () => {
  const { asFragment } = render(<RentCalculator />);
  expect(asFragment()).toMatchSnapshot();
});
