import { render } from '@testing-library/react';

import BaseCard from '../../../components/Cards/Base';

test('Base card component matches snapshot', () => {
  const { asFragment } = render(<BaseCard> </BaseCard>);
  expect(asFragment()).toMatchSnapshot();
});
