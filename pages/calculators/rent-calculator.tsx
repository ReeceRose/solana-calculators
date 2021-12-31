import RentCalculatorCard from '../../components/Cards/RentCalculator';

const RentCalculator: React.FC = () => {
  return (
    <>
      <div className="flex-grow w-full px-4 mt-12 mb-0">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mx-auto lg:w-10/12">
            <RentCalculatorCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default RentCalculator;
