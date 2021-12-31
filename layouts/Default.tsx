import Sidebar from '../components/Sidebar';

type Props = {
  children: JSX.Element[] | JSX.Element;
};

const Default: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className="flex flex-wrap h-screen">
        <div className="relative flex flex-col w-full bg-gray-200 dark:bg-gray-800 md:ml-64">
          {children}
        </div>
      </div>
    </>
  );
};

export default Default;
