import { AppProps } from 'next/app';

import SEO from '../components/SEO';
import Layout from '../layouts/Default';

import '../styles/globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <SEO
        title="Solana Utilities"
        description="Utilities for the Solana Ecosystem"
      />
      <div>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
};

export default MyApp;
