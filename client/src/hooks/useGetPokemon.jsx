import { useEffect, useState } from "react";
import Swal from 'sweetalert2'

const useGetPokemon = (setLoading, setNextUrl, setPrevUrl) => {
  const pokeUrl = "https://pokeapi.co/api/v2/pokemon?limit=18&offset=0";
  const [pokemonDetails, setPokemonDetails] = useState([]);
  async function GetPokemon(apiUrl) {
    try {
      setLoading(true);
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (setNextUrl || setPrevUrl) {
        setNextUrl(data.next);
        setPrevUrl(data.previous);
      }
      const results = data.results;
      const detailsPokemon = results.map((item) =>
        fetch(item.url).then((res) =>
          res
            .json()
            .catch((err) => {
                Swal.fire({
                icon: "error",
                title: "Error!",
                text: err.message,
                });
            })
            .finally(() => {
              setTimeout(() => {
                // setLoading(false);
              }, 200);
            })
        )
      );
      const getAllDetails = await Promise.all(detailsPokemon);
      setPokemonDetails(getAllDetails);
      // setPokemonList(results);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: error.message,
      });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    GetPokemon(pokeUrl);
  }, []);
  return { GetPokemon, pokemonDetails };
};

export default useGetPokemon;
