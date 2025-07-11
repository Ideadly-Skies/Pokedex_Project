import CardPokemonsSkeleton from "../components/CardPokemons/CardPokemonsSkeleton";
import CardPokemons from "../components/CardPokemons/CardPokemons";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ConfirmationDialog from "../components/Modal/ConfirmationDialog";

function Bookmarks() {
  const [bookmarks, setBookmark] = useState(
    localStorage.getItem("bookmark")
      ? JSON.parse(localStorage.getItem("bookmark"))
      : []
  );
  const [toDelete, setToDelete] = useState({});
  const confirmDialogRef = useRef(null);

  function deleteItem() {
    const updatedBookmarks = bookmarks.filter((b) => b.id !== toDelete.id);
    setBookmark(updatedBookmarks);
    localStorage.setItem("bookmark", JSON.stringify(updatedBookmarks));
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
      toast.success("Bookmark added");
    }
  };
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
      <div className=" flex flex-col gap-2">
        <h1 className="text-4xl">Bookmarks</h1>
        <div className="divider"></div>
        <div className="grid gap-3 grid-cols-3">
          {bookmarks.length > 0 ? (
            bookmarks.map((item, i) => (
              <CardPokemons
                item={item}
                key={i}
                handleBookMark={handleToggleBookmark}
                bookmarks={bookmarks}
              />
            ))
          ) : (
            <p>You haven't bookmarked anything yet.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Bookmarks;
