type Props = {
  children: React.ReactNode;
};

const Base: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <div className="relative flex flex-col w-full min-w-0 mb-12 break-words border-0 rounded-lg shadow-lg bg-gray-700">
        <div className="px-6 py-6 mb-0 bg-white rounded-t bg-gray-900">
          <div className="flex justify-between text-center">
            <h6 className="text-xl font-bold text-solana-green">
              Solana Utilities
            </h6>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Base;
