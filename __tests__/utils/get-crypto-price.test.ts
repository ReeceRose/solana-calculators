import { getCryptoPrice } from '../../utils';

// Note: all the extra methods/variables are filled in to remove TS errors
// in VS Code and are not actually required to have the test pass
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let DATA: any;

global.fetch = jest.fn(() =>
  Promise.resolve({
    text: () => Promise.resolve(DATA),
    response: null,
    headers: new Headers(),
    ok: true,
    redirected: false,
    status: 200,
    statusText: 'OK',
    type: 'default',
    url: '',
    body: null,
    json: () => JSON.parse(''),
    clone: () => new Response(),
    bodyUsed: false,
    arrayBuffer: () => Promise.resolve(new ArrayBuffer(1)),
    blob: () => Promise.resolve(new Blob()),
    formData: () => Promise.resolve(new FormData()),
  })
);

test('getCryptoPrice decodes expected data successfully', async () => {
  DATA = JSON.stringify({ solana: { USD: 1 } });
  const price = await getCryptoPrice({ token: 'solana', currency: 'usd' });
  expect(price).toEqual(1);
});

test('getCryptoPrice fails to decode and returns -1', async () => {
  DATA = new Error('failed to get solana price');
  const price = await getCryptoPrice({ token: 'solana', currency: 'cad' });
  expect(price).toEqual(-1);
});
