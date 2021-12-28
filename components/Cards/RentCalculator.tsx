import * as web3 from '@solana/web3.js';
import { useState } from 'react';
import Loading from '../Loading/Loading';

export default function RentCalculator() {
  const [isLoading, setLoading] = useState(false);
  const [kilobytes, setKilobytes] = useState(128);

  const getMinimumBalanceForRentExemption = async () => {
    setLoading(true);
    const connection = new web3.Connection(
      web3.clusterApiUrl('mainnet-beta'),
      'confirmed'
    );
    const minimum = await connection.getMinimumBalanceForRentExemption(
      kilobytes
    );
    console.log(minimum);
    setLoading(false);
  };

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
        </div>
        <div className="flex-auto px-4 lg:px-10">
          <form>
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
                    onChange={(e) => setKilobytes(parseInt(e.target.value))}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
