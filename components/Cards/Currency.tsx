import { useEffect, useState } from 'react';
import getCryptoPrice from '../../utils/get-crypto-price';
import Loading from '../LoadingSpinner';

const RentCalculator: React.FC = () => {
  const CURRENCY = 'USD';
  const [isLoading, setLoading] = useState(false);
  const [solanaPrice, setSolanaPrice] = useState(0);

  const convert = async () => {
    setLoading(true);
    // TODO: convert logic
    setLoading(false);
  };

  const getSolanaPrice = async () => {
    if (!solanaPrice) {
      const price = await getCryptoPrice({
        token: 'solana',
        currency: CURRENCY,
      });
      if (price !== -1) {
        setSolanaPrice(price);
      }
    }
  };

  useEffect(() => {
    const onStart = async () => {
      await getSolanaPrice();
    };
    onStart();
  });

  return (
    <>
      {isLoading && <Loading />}
      <div className="relative flex flex-col w-full min-w-0 break-words bg-gray-700 border-0 rounded-lg shadow-lg">
        <div className="px-6 py-6 mb-0 bg-gray-900 rounded-t">
          <div className="flex justify-between text-center">
            <h6 className="text-xl font-bold text-solana-green">
              Currency Converter
            </h6>
            <button
              className="px-4 py-2 mr-1 text-xs font-bold uppercase transition-all duration-150 ease-linear bg-gray-500 rounded shadow outline-none text-solana-green active:bg-gray-600 hover:shadow-md focus:outline-none"
              type="button"
              onClick={convert}
            >
              Convert
            </button>
          </div>
        </div>

        <div className="flex-auto px-4 lg:px-10">
          <hr className="my-6 border-gray-50 border-b-1" />

          <h6 className="text-sm font-bold uppercase text-gray-50">
            Current Sol price (USD):{' '}
            <span className="font-extrabold text-solana-green">
              {solanaPrice} USD
            </span>
          </h6>
        </div>
        <div className="flex-auto px-4 mb-6 lg:px-10">
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              await convert();
            }}
          >
            <hr className="my-6 border-gray-50 border-b-1" />
            <h6 className="mt-3 mb-6 text-sm font-bold uppercase text-gray-50">
              Converter
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative w-full mb-3">
                  {/* <label
                    className="block mb-2 text-xs font-bold uppercase text-gray-50"
                    htmlFor="kilobytes"
                  >
                    Kilobytes
                  </label> */}
                  {/* <input
                    type="number"
                    max={10000}
                    className="w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-300 transition-all duration-150 ease-linear bg-white border-0 rounded shadow focus:outline-none focus:ring"
                    value={kilobytes}
                    onChange={handleKilobytesInput}
                  /> */}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RentCalculator;
