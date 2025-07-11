import React, { useEffect, useState } from 'react';
import TypeGridItem from '../components/statistics/TypeGridItem';

export default function Types() {
  const [rank, setRank] = useState(null);

  useEffect(() => {
    fetch('/generated/statistics/types-rank.json')
      .then((res) => res.json())
      .then((data) => setRank(data))
      .catch((err) => console.error('Failed to load rank data', err));
  }, []);

  if (!rank) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-8 h-8 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="flex text-2xl font-bold mb-6 justify-center">Pokémon Types</h1>
      <div className="grid md:grid-cols-3 gap-y-6 gap-x-20">
        {rank.typeCount &&
          Object.entries(rank.typeCount).map(([type, { total, single }]) => (
            <TypeGridItem key={type} type={type} total={total} single={single} />
          ))}
      </div>
    </div>
  );
}
