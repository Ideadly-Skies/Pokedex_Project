import Nav from '../components/statistics/nav';
import SingleType from '../components/statistics/SingleType';
import MultiType from '../components/statistics/MultiType';
import PokemonTypeRelation from '../components/statistics/PokemonTypeRelation';
import { snakeCaseToTitleCase } from '../utils/string';

import React, { useEffect, useState } from 'react';

function Statistics() {
  const [rank, setRank] = useState(null);

  useEffect(() => {
    fetch('/generated/statistics/types-rank.json')
      .then((res) => res.json())
      .then((data) => setRank(data))
      .catch((err) => console.error('Failed to load rank data', err));
  }, []);

  if (!rank) return <p className="p-8">Loading...</p>; 
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Pokémon Statistics</h1>

      {/* <Nav /> */}

      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Type Relation Chart</h2>
        <PokemonTypeRelation />
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Most Common Types</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-lg font-medium mb-2">Single Type</h3>
            <SingleType rank={rank.largestSingleType} />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Dual Type</h3>
            <MultiType rank={rank.largestMultiType} />
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Rarest Types</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-lg font-medium mb-2">Single Type</h3>
            <SingleType rank={rank.smallestSingleType} />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Dual Type</h3>
            <p className="text-gray-500">Too many pair types with only one Pokémon 😅</p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Unseen Type Combos</h2>
        <ul className="flex flex-wrap gap-6">
          {rank.noOccurenceMultiType.map(([type1, type2]) => (
            <li key={`${type1},${type2}`} className="text-center">
              <div className="relative w-20 h-20 mx-auto">
                <div className={`absolute w-2/3 h-2/3 rounded-full flex items-center justify-center bg-elm-${type1}`}>
                  <img
                    src={`/icons/pokemon-types/${type1}.svg`}
                    alt={type1}
                    className="w-8 h-8 opacity-50"
                  />
                </div>
                <div className={`absolute bottom-0 right-0 w-2/3 h-2/3 rounded-full flex items-center justify-center bg-elm-${type2}`}>
                  <img
                    src={`/icons/pokemon-types/${type2}.svg`}
                    alt={type2}
                    className="w-8 h-8 opacity-50"
                  />
                </div>
              </div>
              <p className="mt-2 text-sm font-medium">
                {snakeCaseToTitleCase(type1)}/{snakeCaseToTitleCase(type2)}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Statistics