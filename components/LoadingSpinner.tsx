const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-center w-full h-screen overflow-hidden bg-gray-700 opacity-75">
      <div className="w-12 h-12 border-b-4 rounded-full border-solana-green animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
