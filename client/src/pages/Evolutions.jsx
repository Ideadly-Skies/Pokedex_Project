import { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonEvolutionChain from '../components/evolution/PokemonEvolutionChain';
import PokemonEvolutionChainShimmer from '../components/evolution/PokemonEvolutionChainShimmer';

function Evolutions() {
  const [chains, setChains] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAllEvolutionChains() {
      try {
        const res = await axios.get('https://pokeapi.co/api/v2/evolution-chain?limit=50');
        const chainUrls = res.data.results.map((r) => r.url);

        const chainsData = await Promise.all(
          chainUrls.map(async (url) => {
            const { data } = await axios.get(url);
            const chain = [];

            let current = data.chain;
            while (current) {
              const pokemonName = current.species.name;
              const pokemonRes = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
              const speciesRes = await axios.get(current.species.url);

              const evolutionDetail = current.evolution_details?.[0] || {};
              const pokemon = {
                id: pokemonRes.data.id,
                name: pokemonRes.data.name,
                types: pokemonRes.data.types.map((t) => t.type.name),
                generation: Number(speciesRes.data.generation.url.match(/\d+/)?.[0]),
                minLevel: evolutionDetail.min_level,
                trigger: evolutionDetail.trigger?.name,
                item: evolutionDetail.item?.name,
              };

              chain.push(pokemon);
              current = current.evolves_to[0];
            }
            return chain;
          })
        );

        setChains(chainsData.filter((chain) => chain.length > 1));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchAllEvolutionChains();
  }, []);

  if (loading) {
    return (
      <div className="p-8 space-y-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Pokémon Evolutions</h1>

        <div className="flex items-center justify-center mb-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin" />
            <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
              Loading evolution chains...
            </div>
          </div>
        </div>

        {/* Render shimmer placeholders */}
        <PokemonEvolutionChainShimmer />
        <PokemonEvolutionChainShimmer />
        <PokemonEvolutionChainShimmer n={2} />
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Pokémon Evolutions</h1>
      <div className="space-y-6">
        {chains.map((chain, idx) => (
          <PokemonEvolutionChain key={idx} evolution={chain} />
        ))}
      </div>
    </div>
  );
}

export default Evolutions;
