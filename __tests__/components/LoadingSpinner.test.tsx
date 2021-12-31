import { render } from '@testing-library/react';

import Loading from '../../components/LoadingSpinner';

test('Loading component matches snapshot', () => {
  const { asFragment } = render(<Loading />);
  expect(asFragment()).toMatchSnapshot();
});
