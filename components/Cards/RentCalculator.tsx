import * as web3 from '@solana/web3.js';
import { ChangeEvent, useEffect, useState } from 'react';
import Loading from '../Loading/Loading';

export default function RentCalculator() {
  const [isLoading, setLoading] = useState(false);
  const [kilobytes, setKilobytes] = useState(0);
  const currency = 'USD';
  // const [currency, setCurrency] = useState('USD');
  const [solanaPrice, setSolanaPrice] = useState(0);
  const [cost, setCost] = useState(0);
  const [solCost, setSolCost] = useState(0);
  const [currentCurrencyCost, setCurrentCurrencyCost] = useState(0);

  const getMinimumBalanceForRentExemption = async () => {
    if (isNaN(kilobytes)) return;
    setLoading(true);
    const connection = new web3.Connection(
      web3.clusterApiUrl('devnet'),
      'confirmed'
    );
    const minimum = await connection.getMinimumBalanceForRentExemption(
      kilobytes
    );
    setCost(minimum);

    const solCost = minimum / web3.LAMPORTS_PER_SOL;
    setSolCost(solCost);
    setCurrentCurrencyCost(solCost * solanaPrice);
    setLoading(false);
  };

  // TODO: selectable currency
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

  // TODO: allow NaN values for a minute
  const handleKilobytesInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setKilobytes(value || 0);
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
      <div className="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg dark:bg-gray-700">
        <div className="px-6 py-6 mb-0 bg-white rounded-t dark:bg-gray-900">
          <div className="flex justify-between text-center">
            <h6 className="text-xl font-bold text-blue-500">Rent Calculator</h6>
            <button
              className="px-4 py-2 mr-1 text-xs font-bold text-blue-500 uppercase transition-all duration-150 ease-linear bg-gray-100 rounded shadow outline-none dark:text-white dark:bg-gray-500 active:bg-gray-600 hover:shadow-md focus:outline-none"
              type="button"
              onClick={getMinimumBalanceForRentExemption}
            >
              Calculate
            </button>
          </div>
        </div>

        <div className="flex-auto px-4 lg:px-10">
          <hr className="my-6 border-gray-800 dark:border-gray-50 border-b-1" />

          <h6 className="text-sm font-bold text-gray-600 uppercase dark:text-white">
            Current Price per byte-year:{' '}
            <span className="font-extrabold text-gray-700 dark:text-blue-500">
              0.00000348 SOL
            </span>
          </h6>
          <hr className="my-6 border-gray-800 dark:border-gray-50 border-b-1" />

          <h6 className="text-sm font-bold text-gray-600 uppercase dark:text-white">
            Current Sol price (USD):{' '}
            <span className="font-extrabold text-gray-700 dark:text-blue-500">
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
            <hr className="my-6 border-gray-800 dark:border-gray-50 border-b-1" />
            <h6 className="mt-3 mb-6 text-sm font-bold text-gray-600 uppercase dark:text-white">
              Calculator
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold text-gray-600 uppercase dark:text-white"
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
                <p className="block mb-2 text-xs font-bold text-gray-600 uppercase dark:text-white">
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
}
