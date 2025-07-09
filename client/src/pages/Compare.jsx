import { useEffect, useState } from "react";
import StatBarChart from "../components/Chart/StatBarChart";

function Compare() {
  const pokeUrl = "https://pokeapi.co/api/v2/pokemon?limit=18&offset=0";
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState([]);

  async function GetPokemon(urlAPI) {
    try {
      setLoading(true);
      const response = await fetch(urlAPI);
      const data = await response.json();
      // setNextUrl(data.next);
      // setPrevUrl(data.previous);
      const results = data.results;
      const detailsPokemon = results.map((item) =>
        fetch(item.url).then((res) =>
          res
            .json()
            .catch((err) => {
              console.log(err);
            })
            .finally(() => {
              setTimeout(() => {
                setLoading(false);
              }, 200);
            })
        )
      );
      const getAllDetails = await Promise.all(detailsPokemon);
      setPokemonDetails(getAllDetails);

      const allStats = getAllDetails.map((poke) => ({
        name: poke.name,
        stats: poke.stats.map((s) => ({
          name: s.stat.name,
          base_stat: s.base_stat,
        })),
      }));

      setStats(allStats);
      // setPokemonList(results);
    } catch (error) {
      console.log(error);
    } finally {
      // setLoading(false);
    }
  }

  useEffect(() => {
    GetPokemon(pokeUrl);
  }, []);

  console.log(pokemonDetails[0]);
  return (
    <>
      <div className=" flex flex-col gap-2">
        <h1 className="text-4xl">Compare</h1>
        <div className="divider"></div>
        <div className="grid gap-3 grid-cols-3">
          {loading ? (
            <p>Loading ..</p>
          ) : (
            pokemonDetails.map((pokemon) => (
              <div
                key={pokemon.id}
                className="bg-gray-800 text-white p-4 rounded"
              >
                <h2 className="text-xl font-bold capitalize">{pokemon.name}</h2>
                <img
                  src={pokemon.sprites.other["official-artwork"].front_default}
                  alt={pokemon.name}
                  className="w-32 h-auto object-contain"
                />
                <div className="flex gap-2 justify-center">
                  {pokemon.types.map((t) => (
                    <button className="btn">{t.type.name}</button>
                  ))}
                </div>
                <div className="mt-4">
                  {pokemon.stats.map((s) => (
                    <div key={s.stat.name}>
                      <div className="flex justify-between">
                        <p htmlFor="">{s.stat.name}</p>
                        <p htmlFor="">{s.base_stat}</p>
                      </div>
                      <progress
                        className="progress w-full"
                        value={s.base_stat}
                        max="150"
                      ></progress>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Compare;
