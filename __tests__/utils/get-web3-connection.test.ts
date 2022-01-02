import { notEqual } from 'assert';
import { getWeb3Connection } from '../../utils';

test('getWeb3Connection returns a connection', async () => {
  process.env.CLUSTER_API = 'testnet';
  const connection = await getWeb3Connection();
  notEqual(connection, null);
});

test('getWeb3Connection connection fails and returns null', async () => {
  process.env.CLUSTER_API = 'failed';
  const connection = await getWeb3Connection();
  expect(connection).toBeNull();
});
