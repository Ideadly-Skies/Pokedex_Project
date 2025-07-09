import { useEffect, useState } from "react";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import axios from "axios";
import TCGdex from "@tcgdex/sdk";

function Tcg() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [rares, setRares] = useState([]);
  const [hide, setHide] = useState(true);
  const [rarePlaceHolder, setRarePlaceHolder] = useState("Select rarity");
  // Axios
  const tcgApi = axios.create({
    baseURL: "https://api.pokemontcg.io/v2",
  });

  async function fetchRares() {
    try {
      const { data } = await tcgApi({ url: "/rarities" });
      setRares(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchData() {
    setLoading(true);
    try {
      const { data } = await tcgApi({ url: "/cards" });
      setCards(data.data);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
    fetchRares();
  }, []);

  async function rareQuery(rare) {
    setLoading(true);
    console.log(rare);
    try {
      const { data } = await tcgApi({
        url: "/cards",
        params: {
          q: "rarity:" + rare,
        },
      });
      setCards(data.data);
      setRarePlaceHolder(rare);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const toggle = () => (hide ? setHide(false) : setHide(true));
  const rarityClass = `mt-3 absolute bg-gray-50 border w-full rounded-md px-1 py-1 -ml-3 overflow-auto max-h-[calc(100vh_-_16rem)] ${
    hide ? "invisible" : "visible"
  }`;

  return (
    <main>
      <h1 className="pb-3 text-2xl font-semibold">Pokémon Trading Card Game</h1>
      <div className="sticky top-16 z-30 translate-y-[calc((2.7_*_var(--header-translateY))_-_1px)] transition-transform -mx-3.5 flex flex-wrap gap-x-2 gap-y-2.5 bg-B-base px-3.5 pt-2.5 md:translate-y-0 lg:top-0.5 lg:z-50 lg:mr-44 lg:bg-transparent sm:flex lg:max-w-lg">
        <input
          type="search"
          className="w-full rounded-md border bg-B-dark px-3 py-2 placeholder:text-F-light sm:flex-1 md:max-w-72"
          placeholder="🔍 Search card"
          maxLength="15"
        />
        <div className="relative w-full sm:flex-1 md:max-w-52 [&_div]:text-F-light rounded-md border bg-B-dark px-3 py-2">
          <button
            type="button"
            className="flex justify-between w-full items-center"
            onClick={toggle}
          >
            <div className="overflow-hidden overflow-ellipsis whitespace-nowrap text-zinc-500">
              {rarePlaceHolder}
            </div>
            {hide ? <BiSolidDownArrow /> : <BiSolidUpArrow />}
          </button>
          <ul className={rarityClass}>
            {rares.map((rare) => (
              <li
                className="my-1 px-2 py-1 rounded-md hover:bg-gray-200"
                onClick={(e) => {
                  rareQuery(e.target.innerText), toggle();
                }}
              >
                {rare}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="mt-2" />
      <section className="flex flex-wrap gap-x-3.5 pt-6 text-xs *:relative *:mb-4 *:flex-[1_1_10rem] sm:gap-x-5 sm:*:mb-5 md:gap-x-6 md:*:mb-6">
        {error && <p>Error!</p>}
        {loading && <p>Loading...</p>}
        {!loading &&
          cards.map((card) => (
            <div key={card.id}>
              <img
                src="https://pokemon-assets.pages.dev/assets/images/tcg-card-back.webp"
                className="absolute -z-10 w-full rounded-lg opacity-50"
                width="1rem"
              />
              <button type="button" className="w-full">
                <img
                  src={card.images.small}
                  alt=""
                  className="w-full cursor-pointer"
                />
              </button>
              <div className="pt-1">Artist : {card.artist}</div>
            </div>
          ))}
      </section>
    </main>
  );
}

export default Tcg;
