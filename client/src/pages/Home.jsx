import React, { useState, useEffect, useRef } from 'react';

const dummyPokemons = [
  { id: 1, name: 'Bulbasaur', type: 'Grass' },
  { id: 2, name: 'Charmander', type: 'Fire' },
  { id: 3, name: 'Squirtle', type: 'Water' },
  { id: 4, name: 'Pikachu', type: 'Electric' },
  { id: 5, name: 'Eevee', type: 'Normal' },
];

export default function Home() {
  const [filter, setFilter] = useState('');
  const [filteredPokemons, setFilteredPokemons] = useState(dummyPokemons);
  const loadMoreRef = useRef(null);

  useEffect(() => {
    const visible = filter
      ? dummyPokemons.filter((p) => p.name.toLowerCase().includes(filter.toLowerCase()))
      : dummyPokemons;
    setFilteredPokemons(visible);
  }, [filter]);

  return (
    <>
      <title>Pokémon Awesome</title>
      <div style={{ padding: '1rem' }}>
        <input
          type="text"
          placeholder="Search Pokémon..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{
            width: '100%',
            padding: '0.5rem',
            fontSize: '1rem',
            marginBottom: '1rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gap: '1rem',
          }}
        >
          {filteredPokemons.map((pokemon) => (
            <div
              key={pokemon.id}
              style={{
                padding: '1rem',
                border: '1px solid #ddd',
                borderRadius: '8px',
                textAlign: 'center',
                backgroundColor: '#f9f9f9',
              }}
            >
              <h3>{pokemon.name}</h3>
              <p>{pokemon.type}</p>
            </div>
          ))}
          {filteredPokemons.length === 0 && <p>No Pokémon found</p>}
        </div>
      </div>
      <div ref={loadMoreRef}></div>
    </>
  );
}
