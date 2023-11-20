const LoadingSpinner = () => {
  return (
    <div className='flex justify-center items-center mt-4'>
      <div className='animate-spin rounded-full border-t-4 border-gray-200 border-t-blue-500 h-12 w-12'></div>
    </div>
  );
};

export default LoadingSpinner;
