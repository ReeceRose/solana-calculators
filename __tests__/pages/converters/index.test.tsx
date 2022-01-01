import { render } from '@testing-library/react';

import Index from '../../../pages/calculators/index';

test('converters/ index page matches snapshot', () => {
  const { asFragment } = render(<Index />);
  expect(asFragment()).toMatchSnapshot();
});
