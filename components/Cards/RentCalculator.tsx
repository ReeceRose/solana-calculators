import * as web3 from '@solana/web3.js';
import { ChangeEvent, useEffect, useState } from 'react';
import Loading from '../LoadingSpinner';

const RentCalculator: React.FC = () => {
  const currency = 'USD';

  const [isLoading, setLoading] = useState(false);
  const [kilobytes, setKilobytes] = useState('0');
  const [solanaPrice, setSolanaPrice] = useState(0);
  const [cost, setCost] = useState(0);
  const [solCost, setSolCost] = useState(0);
  const [currentCurrencyCost, setCurrentCurrencyCost] = useState(0);

  const getMinimumBalanceForRentExemption = async () => {
    if (kilobytes === '') return;
    setLoading(true);
    const cluster = process.env.CLUSTER_API || 'devnet';
    const connection = new web3.Connection(
      web3.clusterApiUrl(cluster as web3.Cluster),
      'confirmed'
    );
    const minimum = await connection.getMinimumBalanceForRentExemption(
      parseInt(kilobytes)
    );
    setCost(minimum);

    const solCost = minimum / web3.LAMPORTS_PER_SOL;
    setSolCost(solCost);
    setCurrentCurrencyCost(solCost * solanaPrice);
    setLoading(false);
  };

  const getSolanaPrice = async () => {
    if (!solanaPrice) {
      try {
        const result = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=' +
            currency,
          { method: 'GET' }
        );
        const price = JSON.parse(await result.text());
        const solanaPrice = Number(Object.values(price.solana)[0]);
        setSolanaPrice(solanaPrice);
      } catch (_) {
        setSolanaPrice(0);
      }
    }
  };

  const handleKilobytesInput = (e: ChangeEvent<HTMLInputElement>) => {
    setKilobytes(String(parseInt(e.target.value) || ''));
  };

  useEffect(() => {
    const onStart = async () => {
      getSolanaPrice();
    };
    onStart();
  });

  return (
    <>
      {isLoading && <Loading />}
      <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-gray-700 border-0 rounded-lg shadow-lg">
        <div className="px-6 py-6 mb-0 bg-gray-900 rounded-t">
          <div className="flex justify-between text-center">
            <h6 className="text-xl font-bold text-solana-green">
              Rent Calculator
            </h6>
            <button
              className="px-4 py-2 mr-1 text-xs font-bold uppercase transition-all duration-150 ease-linear bg-gray-500 rounded shadow outline-none text-solana-green active:bg-gray-600 hover:shadow-md focus:outline-none"
              type="button"
              onClick={getMinimumBalanceForRentExemption}
            >
              Calculate
            </button>
          </div>
        </div>

        <div className="flex-auto px-4 lg:px-10">
          <hr className="my-6 border-gray-50 border-b-1" />

          <h6 className="text-sm font-bold uppercase text-gray-50">
            Current Price per byte-year:{' '}
            <span className="font-extrabold text-solana-green">
              0.00000348 SOL
            </span>
          </h6>
          <hr className="my-6 border-gray-50 border-b-1" />

          <h6 className="text-sm font-bold uppercase text-gray-50">
            Current Sol price (USD):{' '}
            <span className="font-extrabold text-solana-green">
              {solanaPrice} USD
            </span>
          </h6>
        </div>
        <div className="flex-auto px-4 lg:px-10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              getMinimumBalanceForRentExemption();
            }}
          >
            <hr className="my-6 border-gray-50 border-b-1" />
            <h6 className="mt-3 mb-6 text-sm font-bold uppercase text-gray-50">
              Calculator
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-gray-50"
                    htmlFor="kilobytes"
                  >
                    Kilobytes
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-300 transition-all duration-150 ease-linear bg-white border-0 rounded shadow focus:outline-none focus:ring"
                    value={kilobytes}
                    onChange={handleKilobytesInput}
                  />
                </div>
                <p className="block mb-2 text-xs font-bold uppercase text-gray-50">
                  Approximate cost:
                  {/* TODO: better UI */}
                  <br /> {cost} LAMPORTS
                  <br /> {solCost} SOL
                  <br /> {currentCurrencyCost} USD
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RentCalculator;
