import Link from 'next/link';

const Calculaturs: React.FC = () => {
  return (
    <>
      <div className="flex-auto px-4 lg:px-10">
        <hr className="my-6 border-gray-50 border-b-1" />

        <h6 className="text-sm font-bold uppercase text-gray-50">
          Calculators
        </h6>
      </div>
      <div className="flex-auto px-4 mb-6 lg:px-10">
        <hr className="my-6 border-gray-50 border-b-1" />

        <div className="w-full px-4 ">
          <p className="block mb-2 text-xs font-bold uppercase text-gray-50">
            <Link href="/calculators/rent-calculator">
              <a
                href=""
                className="text-solana-green hover:text-solana-green-hover"
              >
                Rent Calculator -{' '}
                <span className="text-gray-50"> Calculate rent cost</span>
              </a>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Calculaturs;
