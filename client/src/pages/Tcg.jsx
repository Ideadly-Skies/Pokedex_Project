import React from "react";

function Tcg() {
  return (
    <main>
      <h1 className="pb-3 text-red-700">Pokémon Trading Card Game</h1>
      <div className="sticky top-16 z-30 translate-y-[calc((2.7_*_var(--header-translateY))_-_1px)] transition-transform -mx-3.5 flex flex-wrap gap-x-2 gap-y-2.5 bg-B-base px-3.5 pt-2.5 md:translate-y-0 lg:top-0.5 lg:z-50 lg:mr-44 lg:bg-transparent sm:flex lg:max-w-lg">
        <input
          type="search"
          className="w-full rounded-md border bg-B-dark px-3 py-2 placeholder:text-F-light sm:flex-1 md:max-w-72"
          placeholder="Search card"
        />
        <div className="relative w-full sm:flex-1 md:max-w-52 [&_div]:text-F-light">
          <button>
            <div className="overflow-hidden overflow-ellipsis whitespace-nowrap">
              Select rarity
            </div>
            {/* icon arrow down here */}
            <i></i>
          </button>
        </div>
      </div>
      <hr />
      <section className="flex flex-wrap gap-x-3.5 pt-6 text-xs *:relative *:mb-4 *:flex-[1_1_10rem] sm:gap-x-5 sm:*:mb-5 md:gap-x-6 md:*:mb-6">
        <div>
          <img
            src="https://pokemon-assets.pages.dev/assets/images/tcg-card-back.webp"
            className="absolute -z-10 w-full rounded-lg opacity-50"
          />
          <button>
            <img
              src="https://images.pokemontcg.io/dp3/1.png"
              alt=""
              className="w-full cursor-pointer"
            />
          </button>
          <div className="pt-0.5">Artist : Kouki Saitou</div>
        </div>
      </section>
    </main>
  );
}

export default Tcg;
