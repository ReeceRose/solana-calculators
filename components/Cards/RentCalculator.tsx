export default function RentCalculator() {
  return (
    <>
      <div className="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-blueGray-100">
        <div className="px-6 py-6 mb-0 bg-white rounded-t">
          <div className="flex justify-between text-center">
            <h6 className="text-xl font-bold text-blue-500">Rent Calculator</h6>
            <button
              className="px-4 py-2 mr-1 text-xs font-bold text-blue-500 uppercase transition-all duration-150 ease-linear bg-gray-100 rounded shadow outline-none active:bg-blueGray-600 hover:shadow-md focus:outline-none"
              type="button"
            >
              Calculate
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
          <form>
            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="mt-3 mb-6 text-sm font-bold text-gray-600 uppercase">
              Current Price per byte-year:{' '}
              <span className="font-extrabold text-gray-700">
                0.00000348 SOL
              </span>
            </h6>
          </form>
        </div>
      </div>
    </>
  );
}
