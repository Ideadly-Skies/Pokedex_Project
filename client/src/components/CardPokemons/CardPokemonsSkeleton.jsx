const CardPokemonsSkeleton = () => {
  return (
    <div className=" relative w-full shadow-sm flex overflow-hidden rounded-md p-4 justify-between items-center border border-base-content animate-pulse">
      <div className="flex flex-col gap-2 z-10 w-full">
        <div className="h-6 w-3/4 bg-base-content/10 rounded" />
        <div className="flex flex-col gap-1 text-xs">
          <div className="h-3 w-1/2 bg-base-content/10 rounded" />
          <div className="h-3 w-2/3 bg-base-content/10 rounded" />
          <div className="flex gap-1 mt-2">
            <div className="h-3 w-3 bg-base-content/10 rounded-full" />
            <div className="h-3 w-3 bg-base-content/10 rounded-full" />
          </div>
        </div>
      </div>

      <div className="w-24 h-30 bg-base-content/10 rounded z-10" />
    </div>
  );
};

export default CardPokemonsSkeleton;
