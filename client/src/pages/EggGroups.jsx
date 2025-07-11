import { useEffect, useState } from "react";
import PokemonEggCard from "../components/PokemonEggCard";

export default function EggGroups() {
  const [eggGroups, setEggGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch daftar egg group saat pertama render
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/egg-group")
      .then((res) => res.json())
      .then((data) => setEggGroups(data.results))
      .catch((err) => console.error("Failed to fetch egg groups", err));
  }, []);

  // Handle klik egg group
  function handleSelectGroup(url, name) {
    setLoading(true);
    setSelectedGroup(name);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPokemonList(data.pokemon_species))
      .catch((err) => console.error("Failed to fetch group detail", err))
      .finally(() => setLoading(false));
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Egg Groups</h1>

      {/* Tombol Egg Groups */}
      <div className="flex flex-wrap gap-2 mb-6">
        {eggGroups.map((group) => (
          <button
            key={group.name}
            className={`px-4 py-2 rounded ${
              selectedGroup === group.name
                ? "bg-blue-600 text-white"
                : "bg-blue-200 text-blue-900 hover:bg-blue-300"
            }`}
            onClick={() => handleSelectGroup(group.url, group.name)}
          >
            {group.name}
          </button>
        ))}
      </div>

      {/* Loading */}
      {loading && <p className="text-gray-500">Loading Pokémon...</p>}

      {/* Hasil Pokémon */}
      {selectedGroup && !loading && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">
            Pokémon in "{selectedGroup}" group:
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {pokemonList.map((pokemon) => (
              <PokemonEggCard key={pokemon.name} name={pokemon.name} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
