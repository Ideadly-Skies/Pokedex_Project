const usePokemonTypeClasses = () => {
  const pokemonTypeClasses = [
    { type: "bug", className: "bg-green-300" },
    { type: "dark", className: "bg-gray-400" },
    { type: "dragon", className: "bg-indigo-400" },
    { type: "electric", className: "bg-yellow-400" },
    { type: "fairy", className: "bg-pink-500" },
    { type: "fighting", className: "bg-red-500" },
    { type: "fire", className: "bg-red-400" },
    { type: "flying", className: "bg-sky-600" },
    { type: "ghost", className: "bg-purple-700" },
    { type: "grass", className: "bg-green-400" },
    { type: "ground", className: "bg-yellow-600" },
    { type: "ice", className: "bg-cyan-600" },
    { type: "normal", className: "bg-gray-400" },
    { type: "poison", className: "bg-purple-600" },
    { type: "psychic", className: "bg-pink-600" },
    { type: "rock", className: "bg-yellow-700" },
    { type: "steel", className: "bg-gray-600" },
    { type: "water", className: "bg-blue-400" },
    { type: "undefined", className: "bg-neutral-500" },
  ];
  return { pokemonTypeClasses };
};

export default usePokemonTypeClasses;
