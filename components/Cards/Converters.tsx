import Link from 'next/link';

const Converters: React.FC = () => {
  return (
    <>
      <div className="flex-auto px-4 lg:px-10 ">
        <hr className="my-6 border-gray-50 border-b-1" />

        <h6 className="text-sm font-bold uppercase text-gray-50">Converters</h6>
      </div>
      <div className="flex-auto px-4 lg:px-10">
        <hr className="my-6 border-gray-50 border-b-1" />

        <div className="w-full px-4 ">
          <p className="block mb-2 text-xs font-bold uppercase text-gray-50">
            <Link href="/converters/currency">
              <a className="text-solana-green hover:text-solana-green-hover">
                Currency Converter -{' '}
                <span className="text-gray-50">
                  {' '}
                  Convert various currencies
                </span>
              </a>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Converters;
