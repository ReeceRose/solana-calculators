import * as web3 from '@solana/web3.js';

const getWeb3Connection = async (): Promise<web3.Connection | null> => {
  try {
    const cluster = process.env.CLUSTER_API || 'devnet';
    const connection = new web3.Connection(
      web3.clusterApiUrl(cluster as web3.Cluster),
      'confirmed'
    );
    return connection;
  } catch (_) {
    return null;
  }
};

export default getWeb3Connection;
