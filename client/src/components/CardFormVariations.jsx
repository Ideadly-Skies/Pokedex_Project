const CardFormVariations = ({ name, types, image, forms }) => {
  const colors = {
    grass: "from-green-500 to-emerald-600",
    fire: "from-orange-500 to-red-600",
    water: "from-sky-500 to-blue-600",
    bug: "from-lime-400 to-green-600",
    flying: "from-indigo-400 to-purple-500",
    electric: "from-yellow-400 to-amber-500",
    ghost: "from-violet-500 to-purple-800",
    poison: "from-pink-400 to-fuchsia-600",
    normal: "from-zinc-400 to-zinc-600",
    fighting: "from-rose-500 to-red-700",
    ice: "from-cyan-300 to-blue-400",
    rock: "from-amber-500 to-yellow-700",
    ground: "from-amber-600 to-orange-700",
    dragon: "from-indigo-500 to-purple-700",
    dark: "from-gray-600 to-gray-800",
    steel: "from-slate-400 to-slate-600",
    fairy: "from-pink-400 to-pink-600",
    psychic: "from-fuchsia-500 to-pink-600",
  };

  const bgColor =
    types.length > 0
      ? colors[types[0].toLowerCase()] || "from-gray-400 to-gray-600"
      : "from-gray-400 to-gray-600";

  return (
    <div
      className={`relative rounded-xl shadow-md p-4 bg-linear-to-r ${bgColor} overflow-hidden min-h-[10rem] transition-transform hover:scale-[1.02]`}
    >
      <div className="z-0 relative w-2/3">
        <h2 className="text-xl font-bold">
          {name}
          <span className="block text-lg font-bold">{forms}</span>
        </h2>
        <p className="italic text-sm opacity-80">{types.join(", ")}</p>
      </div>

      <img
        src={image}
        alt={name}
        className="absolute bottom-0 right-2 w-[10rem] sm:w-[7rem] md:w-[8rem] drop-shadow-lg pointer-events-none z-1"
      />
    </div>
  );
};

export default CardFormVariations;
