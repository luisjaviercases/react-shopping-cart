const PageNotFound = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='bg-white p-8 rounded-lg shadow-md'>
        <h1 className='text-4xl font-bold text-red-500 mb-4'>404 Error</h1>
        <h2 className='text-xl text-gray-800'>Page Not Found</h2>
      </div>
    </div>
  );
};

export default PageNotFound;
