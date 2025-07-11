import React, { useEffect, useState } from 'react';

function GuessPokemon() {
  const [pokemon, setPokemon] = useState(null);
  const [guess, setGuess] = useState('');
  const [revealed, setRevealed] = useState(false);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    fetchRandomPokemon();
  }, []);

  const fetchRandomPokemon = async () => {
    const id = Math.floor(Math.random() * 898) + 1;
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemon(data);
      setRevealed(false);
      setGuess('');
      setFeedback('');
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
    }
  };

  const handleGuess = () => {
    if (!pokemon) return;
    console.log(pokemon.name.toLowerCase())
    if (guess.trim().toLowerCase() === pokemon.name.toLowerCase()) {
      setRevealed(true);
      setFeedback('Correct!');
    } else {
      setFeedback('Try again!');
    }
  };

  if (!pokemon) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-8 h-8 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Who's That Pokémon?</h1>
      <div className="w-64 h-64 mb-4">
        <img
          src={pokemon.sprites.other['official-artwork'].front_default}
          alt="Guess the Pokémon"
          className={`w-full h-full object-contain transition duration-500 ${revealed ? '' : 'brightness-0'}`}
        />
      </div>
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter Pokémon name"
        className="border p-2 mb-2 w-64 text-center"
      />
      <button
        onClick={handleGuess}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-2"
      >
        Guess
      </button>
      <button
        onClick={fetchRandomPokemon}
        className="bg-gray-500 text-white px-4 py-2 rounded"
      >
        Next Pokémon
      </button>
      {feedback && <p className="mt-2 text-lg">{feedback}</p>}
    </div>
  );
}

export default GuessPokemon;
