import { render } from '@testing-library/react';

import Index from '../../../pages/calculators/index';

test('calculators/index index page matches snapshot', () => {
  const { asFragment } = render(<Index />);
  expect(asFragment()).toMatchSnapshot();
});
