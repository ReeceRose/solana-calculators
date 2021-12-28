import { render } from '@testing-library/react';

import Loading from '../../../components/Loading/Loading';

test('Loading component matches snapshot', () => {
  const { asFragment } = render(<Loading />);
  expect(asFragment()).toMatchSnapshot();
});
