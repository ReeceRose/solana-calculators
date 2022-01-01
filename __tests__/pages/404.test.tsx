import { render } from '@testing-library/react';

import Custom404 from '../../pages/404';

test('404 page matches snapshot', () => {
  const { asFragment } = render(<Custom404 />);
  expect(asFragment()).toMatchSnapshot();
});
