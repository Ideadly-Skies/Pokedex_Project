import { useEffect, useState } from "react";
import CardFormVariations from "../components/CardFormVariations";
import LoadingFormVariations from "../components/LoadingFormVariations";

function Mega() {
  const [gmaxForms, setGmaxForms] = useState([]);
  const [loading, setLoading] = useState(true);

  const megaMap = {
    venusaur_mega: 10033,
    charizard_mega_x: 10034,
    charizard_mega_y: 10035,
    blastoise_mega: 10036,
    beedrill_mega: 10090,
    pidgeot_mega: 10075,
    alakazam_mega: 10037,
    slowbro_mega: 10073,
    gengar_mega: 10038,
    kangaskhan_mega: 10039,
    pinsir_mega: 10040,
    gyarados_mega: 10041,
    aerodactyl_mega: 10042,
    mewtwo_mega_x: 10043,
    mewtwo_mega_y: 10044,
    ampharos_mega: 10045,
    steelix_mega: 10072,
    scizor_mega: 10046,
    heracross_mega: 10047,
    houndoom_mega: 10048,
    tyranitar_mega: 10049,
    sceptile_mega: 10065,
    blaziken_mega: 10050,
    swampert_mega: 10064,
    gardevoir_mega: 10051,
    sableye_mega: 10066,
    mawile_mega: 10052,
    aggron_mega: 10053,
    medicham_mega: 10054,
    manectric_mega: 10055,
    sharpedo_mega: 10070,
    camerupt_mega: 10087,
    altaria_mega: 10067,
    banette_mega: 10056,
    absol_mega: 10057,
    glalie_mega: 10074,
    salamence_mega: 10089,
    metagross_mega: 10076,
    latias_mega: 10062,
    latios_mega: 10063,
    rayquaza_mega: 10079,
    lopunny_mega: 10088,
    garchomp_mega: 10058,
    lucario_mega: 10059,
    abomasnow_mega: 10060,
    gallade_mega: 10068,
    audino_mega: 10069,
    diancie_mega: 10075,
  };

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      const entries = Object.entries(megaMap);
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
      <h1 className="text-3xl font-semibold mb-6">Mega Evolutions</h1>
      <hr className="mb-6" />
      <div className="grid grid-cols-3 gap-4">
        {loading
          ? Array.from({ length: Object.keys(megaMap).length }).map(
              (_, index) => <LoadingFormVariations key={index} />
            )
          : gmaxForms.map((pokemon) => (
              <CardFormVariations
                key={pokemon.name}
                name={pokemon.name}
                types={pokemon.types}
                image={pokemon.image}
                forms={"Mega"}
              />
            ))}
      </div>
    </div>
  );
}

export default Mega;