import { useEffect, useState } from "react";
import CardFormVariations from "../components/CardFormVariations";
import LoadingFormVariations from "../components/LoadingFormVariations";

function Gmax() {
  const [gmaxForms, setGmaxForms] = useState([]);
  const [loading, setLoading] = useState(true);

  const gmaxMap = {
    venusaur: 10195,
    charizard: 10196,
    blastoise: 10197,
    butterfree: 10198,
    pikachu: 10199,
    meowth: 10200,
    machamp: 10201,
    gengar: 10202,
    kingler: 10203,
    lapras: 10204,
    eevee: 10205,
    snorlax: 10206,
    garbodor: 10207,
    melmetal: 10208,
    rillaboom: 10209,
    cinderace: 10210,
    inteleon: 10211,
    corviknight: 10212,
    orbeetle: 10213,
    drednaw: 10214,
    coalossal: 10215,
    flapple: 10216,
    appletun: 10217,
    sandaconda: 10218,
    toxtricity_amped: 10219,
    toxtricity_low_key: 10228,
    centiskorch: 10220,
    hatterene: 10221,
    grimmsnarl: 10222,
    alcremie: 10223,
    copperajah: 10224,
    duraludon: 10225,
    urshifu_single_strike: 10226,
    urshifu_rapid_strike: 10227,
  };

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      const entries = Object.entries(gmaxMap);
      const results = await Promise.all(
        entries.map(async ([key, id]) => {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
          const data = await res.json();
          const formattedName = key
            .split("_")
            .join(" ")
            .split(" ")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(" ");
          return {
            name: formattedName,
            types: data.types.map((t) => t.type.name),
            image: data.sprites.other["official-artwork"].front_default,
          };
        })
      );
      setGmaxForms(results);
      setLoading(false);
    };

    fetchAll();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Gigantamax Forms</h1>
      <hr className="mb-6" />
      <div className="grid grid-cols-3 gap-4">
        {loading
          ? Array.from({ length: Object.keys(gmaxMap).length }).map(
              (_, index) => <LoadingFormVariations key={index} />
            )
          : gmaxForms.map((pokemon) => (
              <CardFormVariations
                key={pokemon.name}
                name={pokemon.name}
                types={pokemon.types}
                image={pokemon.image}
                forms={"G-Max"}
              />
            ))}
      </div>
    </div>
  );
}

export default Gmax;
