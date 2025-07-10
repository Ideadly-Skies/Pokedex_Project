const LoadingFormVariations = () => {
  return (
    <div className="relative rounded-xl shadow-md p-4 bg-gray-300 overflow-hidden min-h-[10rem] animate-pulse">
      <div className="z-0 relative w-2/3">
        <div className="h-6 bg-gray-400 rounded w-3/4 mb-2"></div>
        <div className="h-5 bg-gray-400 rounded w-1/2 mb-3"></div>
        <div className="h-4 bg-gray-400 rounded w-1/3"></div>
      </div>
      <div className="absolute bottom-4 right-4 bg-gray-400 rounded-full w-[6rem] h-[6rem] sm:w-[7rem] sm:h-[7rem] md:w-[8rem] md:h-[8rem]"></div>
    </div>
  );
};

export default LoadingFormVariations;