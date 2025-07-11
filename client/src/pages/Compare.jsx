import { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RiLineHeight } from "react-icons/ri";
import { TbWeight } from "react-icons/tb";
import usePokemonTypeClasses from "../hooks/usePokemonTypeClasses";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

function Compare() {
  const pokeUrl = "https://pokeapi.co/api/v2/pokemon?limit=18&offset=0";
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [compare, setCompare] = useState([]);
  const [loading, setLoading] = useState(true);
  const selectRef = useRef(null);
  const { pokemonTypeClasses } = usePokemonTypeClasses();

  async function GetPokemon(urlAPI) {
    try {
      setLoading(true);
      const response = await fetch(urlAPI);
      const data = await response.json();
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
                setLoading(false);
              }, 200);
            })
        )
      );
      const getAllDetails = await Promise.all(detailsPokemon);
      setPokemonDetails(getAllDetails);
    
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: error.message,
      }); 
    } 
  }

  const handleCompare = (value) => {
    const item = JSON.parse(value);
    setCompare((prev) => [item, ...prev]);
  };
  const handleDeleteCompare = (value) => {
    setCompare((prev) => prev.filter((item) => item.id !== value.id));
    if (selectRef.current) {
      selectRef.current.value = "";
    }
  };

  useEffect(() => {
    GetPokemon(pokeUrl);
  }, []);

  return (
    <>
      <div className=" flex flex-col gap-2">
        <h1 className="text-4xl">Compare</h1>
        <div className="divider"></div>
        <div>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Select Pokemons</legend>
            <select
              onChange={(e) => handleCompare(e.target.value)}
              defaultValue=""
              className="select"
              ref={selectRef}
            >
              <option disabled={true} selected value="">
                Pick a Pokemons
              </option>
              {pokemonDetails.map((item) => (
                <option
                  value={JSON.stringify(item)}
                  disabled={compare.some((c) => c.id === item.id)}
                  key={item.id}
                >
                  {item.name}
                </option>
              ))}
            </select>
          </fieldset>
        </div>
        <div className="w-full overflow-auto mt-5">
          <div className={` flex gap-3 w-max`}>
            {loading ? (
              <p>Loading ..</p>
            ) : compare.length == 0 ? (
              <p>You haven't selected any pokemon yet.</p>
            ) : (
              compare.map((pokemon) => (
                <div
                  key={pokemon.id}
                  className="bg-gray-800 text-white p-4 rounded w-60 relative flex justify-center flex-col gap-2 items-center"
                >
                  <button
                    onClick={() => handleDeleteCompare(pokemon)}
                    className="btn btn-circle btn-xs absolute right-3 top-3"
                  >
                    <IoMdClose />
                  </button>
                  <img
                    src={
                      pokemon.sprites.other["official-artwork"].front_default
                    }
                    alt={pokemon.name}
                    className="w-32 min-h-34 object-contain"
                  />
                  <Link to={`/${pokemon.id}`}>
                    <h2 className="text-lg font-bold text-center capitalize hover:underline">
                      {pokemon.name}
                    </h2>
                  </Link>
                  <div className="flex gap-2 justify-center w-full">
                    {pokemon.types.map((t, i) => (
                      <div
                        className={`badge ${
                          pokemonTypeClasses.find(
                            (item) => item.type === t.type.name
                          ).className
                        } text-white badge-sm`}
                        key={i}
                      >
                        {t.type.name}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-4 font-extralight text-sm">
                    <div className="flex items-center gap-1">
                      <RiLineHeight /> <p>{pokemon.height / 10} m</p>
                    </div>

                    <div className="flex items-center gap-1 ">
                      <TbWeight /> <p>{pokemon.weight / 10} kg</p>
                    </div>
                  </div>
                  <div className="divider p-0 m-0"></div>
                  <div className=" w-full flex flex-col gap-2">
                    {pokemon.stats.map((s) => (
                      <div key={s.stat.name} className="gap-1 flex flex-col">
                        <div className="flex justify-between capitalize text-xs">
                          <p>{s.stat.name}</p>
                          <p>{s.base_stat}</p>
                        </div>
                        <progress
                          className="progress w-full m-0"
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
      </div>
    </>
  );
}

export default Compare;
