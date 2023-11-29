import { ThreeDots } from 'react-loader-spinner';

const Loader = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#20b2aa"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      )}
    </>
  );
};

export default Loader;
