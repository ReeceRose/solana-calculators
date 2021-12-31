import { render } from '@testing-library/react';

import CalculatorsCard from '../../../components/Cards/Calculators';

test('Calculators card component matches snapshot', () => {
  const { asFragment } = render(<CalculatorsCard />);
  expect(asFragment()).toMatchSnapshot();
});
