import { render } from '@testing-library/react';

import ConvertersCard from '../../../components/Cards/Converters';

test('Converters card component matches snapshot', () => {
  const { asFragment } = render(<ConvertersCard />);
  expect(asFragment()).toMatchSnapshot();
});
