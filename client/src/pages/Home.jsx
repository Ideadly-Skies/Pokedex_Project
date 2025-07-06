import { useEffect, useRef, useState } from "react";
import CardPokemons from "../components/CardPokemons/CardPokemons";
import CardPokemonsSkeleton from "../components/CardPokemons/CardPokemonsSkeleton";
import toast, { Toaster } from "react-hot-toast";
import ConfirmationDialog from "../components/Modal/ConfirmationDialog";

export default function Home() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const confirmDialogRef = useRef(null);
  const [bookmarks, setBookmark] = useState(
    localStorage.getItem("bookmark")
      ? JSON.parse(localStorage.getItem("bookmark"))
      : []
  );
  const [toDelete, setToDelete] = useState({});
  const pokeUrl = "https://pokeapi.co/api/v2/pokemon?limit=18&offset=0";

  function deleteItem() {
    const updatedBookmarks = bookmarks.filter((b) => b.id !== toDelete.id);
    setBookmark(updatedBookmarks);
    localStorage.setItem("bookmark", JSON.stringify(updatedBookmarks));
    console.log("Bookmark removed");
    toast.success("Bookmark Removed");
  }
  const handleToggleBookmark = (pokemon) => {
    const isAlreadyBookmarked = bookmarks.some((b) => b.id === pokemon.id);

    if (isAlreadyBookmarked) {
      setToDelete(pokemon);
      confirmDialogRef.current.showModal();
    } else {
      const updatedBookmarks = [...bookmarks, pokemon];
      setBookmark(updatedBookmarks);
      localStorage.setItem("bookmark", JSON.stringify(updatedBookmarks));
      console.log("Bookmark added");
      toast.success("Bookmark added");
    }
  };

  async function GetPokemon(urlAPI) {
    try {
      setLoading(true);
      const response = await fetch(urlAPI);
      const data = await response.json();
      setNextUrl(data.next);
      setPrevUrl(data.previous);
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
      setPokemonList(results);
    } catch (error) {
      console.log(error);
    } finally {
      // setLoading(false);
    }
  }

  useEffect(() => {
    GetPokemon(pokeUrl);
  }, []);

  return (
    <>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
        <ConfirmationDialog ref={confirmDialogRef} action={deleteItem}>
          <p>
            Are you sure you want to remove{" "}
            <span className="font-bold capitalize"> {toDelete.name}</span> from
            your bookmarks?
          </p>
        </ConfirmationDialog>
      </div>
      <div className=" flex flex-col gap-2 ">
        <h1 className="text-4xl">Pokémon Species</h1>
        <div className="divider"></div>
        <div className="grid gap-3 grid-cols-3">
          {loading
            ? [...Array(18)].map((_, i) => <CardPokemonsSkeleton key={i} />)
            : pokemonDetails.map((item, i) => (
                <CardPokemons
                  item={item}
                  key={i}
                  handleBookMark={handleToggleBookmark}
                  bookmarks={bookmarks}
                />
              ))}
        </div>
        <div className="join mx-auto mt-4">
          <button
            disabled={!prevUrl}
            className="join-item btn"
            onClick={() => {
              GetPokemon(prevUrl), setPage((prev) => prev - 1);
            }}
          >
            «
          </button>
          <button className="join-item btn">{page}</button>
          <button
            disabled={!nextUrl}
            className="join-item btn"
            onClick={() => {
              GetPokemon(nextUrl), setPage((prev) => prev + 1);
            }}
          >
            »
          </button>
        </div>
      </div>
    </>
  );
}
