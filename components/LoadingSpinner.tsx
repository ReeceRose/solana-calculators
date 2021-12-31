export default function LoadingSpinner() {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-center w-full h-screen overflow-hidden bg-gray-700 opacity-75">
      <div className="w-12 h-12 border-b-4 border-blue-500 rounded-full animate-spin"></div>
    </div>
  );
}
