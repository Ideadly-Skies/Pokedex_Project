import { MdOutlineBookmarkAdd, MdOutlineBookmark } from "react-icons/md";
import { Link } from "react-router-dom";
import usePokemonTypeClasses from "../../hooks/usePokemonTypeClasses";
const CardPokemons = ({ item, handleBookMark, bookmarks }) => {
  const { pokemonTypeClasses } = usePokemonTypeClasses();
  const colors = item.types.map((t) => {
    const match = pokemonTypeClasses.find((tc) => tc.type === t.type.name);
    return match ? match.className : "bg-neutral-500";
  });

  const isBookmarked = bookmarks.some((b) => b.id === item.id);

  return (
    <div className="relative">
      <button
        className="cursor-pointer text-white z-2 absolute top-3 right-3 group"
        onClick={() => handleBookMark(item)}
      >
        {isBookmarked ? <MdOutlineBookmark /> : <MdOutlineBookmarkAdd />}
        <div className=" group-hover:opacity-100 badge-xs text-[10px] opacity-0 group-hover:translate-y-0 right-2 top-4 translate-y-2 absolute  transition duration-300 badge badge-neutral">
          {isBookmarked ? "Remove" : "Add"}
        </div>
      </button>
      <Link to={`/${item.id}`} className="cursor-pointer group">
        <div
          className={`${colors[0]} relative w-full shadow-sm flex overflow-hidden rounded-md p-4 justify-between items-center border-1   border-base-content`}
        >
          <div className="inset-0 absolute bg-linear-to-r from-black/50 to-black/20 bg-black/40 "></div>
          <div className="text-base-content flex flex-col gap-2 z-1">
            <div className="flex gap-2 items-center">
              <h2 className="text-xl  text-white capitalize">{item.name}</h2>
            </div>
            <div className="text-xs text-white/70 capitalize flex flex-col gap-1">
              <p className="">
                {item.types.map((t) => t.type.name).join(", ")}
              </p>
              <p className="">
                {item.abilities.map((a) => a.ability.name).join(", ")}
              </p>
              <div className="flex gap-1 mt-2">
                {colors.map((c, i) => (
                  <div
                    key={i}
                    className={`${c} h-3 w-3 rounded-full border border-white`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          <img
            src={item.sprites.other["official-artwork"].front_default}
            alt={item.name}
            className="w-30 min-h-30 object-contain z-1 group-hover:scale-110 transition duration-300"
          />
        </div>
      </Link>
    </div>
  );
};

export default CardPokemons;
