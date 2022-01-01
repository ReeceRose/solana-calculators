type Props = {
  children: React.ReactNode;
};

const Base: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <div className="relative flex flex-col w-full min-w-0 break-words bg-gray-700 border-0 rounded-lg shadow-lg">
        <div className="p-6 bg-gray-900 rounded-t">
          <div className="flex justify-between text-center">
            <h6 className="text-xl font-bold text-solana-green">
              Solana Utilities
            </h6>
          </div>
        </div>
        {children}
        <div className="mb-6"></div>
      </div>
    </>
  );
};

export default Base;
