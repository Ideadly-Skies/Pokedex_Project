import { useEffect, useState } from "react";

// Warna background card
const bgColors = {
  normal: "bg-gray-200",
  fire: "bg-red-100",
  water: "bg-blue-100",
  grass: "bg-green-100",
  electric: "bg-yellow-100",
  ice: "bg-cyan-100",
  fighting: "bg-orange-100",
  poison: "bg-purple-100",
  ground: "bg-yellow-200",
  flying: "bg-indigo-100",
  psychic: "bg-pink-100",
  bug: "bg-lime-100",
  rock: "bg-[#f4e2c0]",
  ghost: "bg-indigo-200",
  dragon: "bg-indigo-300",
  dark: "bg-zinc-200",
  steel: "bg-gray-300",
  fairy: "bg-pink-200",
};

export default function PokemonEggCard({ name }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, [name]);

  if (!pokemon) return null;

  const primaryType = pokemon.types[0].type.name;
  const bgColor = bgColors[primaryType] || "bg-gray-100";

  return (
    <div className={`rounded-xl shadow-md p-4 ${bgColor} flex justify-between items-center`}>
      <div>
        <h2 className="text-lg font-bold capitalize text-gray-800">{pokemon.name}</h2>
        <p className="text-sm text-gray-600">#{pokemon.id.toString().padStart(4, "0")}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {pokemon.types.map((type) => (
            <span
              key={type.type.name}
              className={`text-xs font-semibold px-2 py-1 rounded-full text-white ${getTypeColor(
                type.type.name
              )}`}
            >
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
      <img
        src={pokemon.sprites?.other["official-artwork"]?.front_default}
        alt={pokemon.name}
        className="w-24 h-24 object-contain drop-shadow-lg"
      />
    </div>
  );
}

// Warna badge berdasarkan type 
function getTypeColor(type) {
  switch (type) {
    case "fire":
      return "bg-red-500";
    case "water":
      return "bg-blue-500";
    case "grass":
      return "bg-green-500";
    case "electric":
      return "bg-yellow-400 text-black";
    case "bug":
      return "bg-lime-500";
    case "poison":
      return "bg-purple-500";
    case "flying":
      return "bg-indigo-300 text-black";
    case "normal":
      return "bg-gray-400";
    case "ground":
      return "bg-yellow-700";
    case "rock":
      return "bg-stone-600";
    case "ghost":
      return "bg-indigo-800";
    case "dragon":
      return "bg-indigo-600";
    case "dark":
      return "bg-zinc-800";
    case "psychic":
      return "bg-pink-400";
    case "ice":
      return "bg-cyan-400";
    case "fairy":
      return "bg-pink-300 text-black";
    default:
      return "bg-slate-400";
  }
}
