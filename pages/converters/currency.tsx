import CurrencyConverterCard from '../../components/Cards/Currency';

const Currency: React.FC = () => {
  return (
    <>
      <div className="flex-grow w-full px-4 mt-12 mb-0">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mx-auto lg:w-10/12">
            <CurrencyConverterCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Currency;
