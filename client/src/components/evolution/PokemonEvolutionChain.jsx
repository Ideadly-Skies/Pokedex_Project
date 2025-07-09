import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { BsArrow90DegDown, BsArrowRight } from 'react-icons/bs';

import PokemonImage from '../common/pokemon-image';
import { snakeCaseToTitleCase } from '../../utils/string';

const ITEM_IMAGE_URL = 'https://cdn.statically.io/gh/PokeAPI/sprites/master/sprites/items';

export default function PokemonEvolutionChain({ evolution, className }) {
  return (
    <div
      key={evolution.map((pokemon) => pokemon.id).join('')}
      className={clsx('flex items-center justify-start flex-wrap gap-4 md:gap-6 w-full', className)}
    >
        {evolution.map((pokemon, idx) => {
            const href = `/pokemon/${pokemon.name}`;

            return (
                <div key={pokemon.id} className="flex items-center gap-2">
                <li
                    className={clsx(
                        'pokemon-elm flex-1 min-w-[271px] max-w-[280px] relative flex flex-col items-center justify-center rounded-md px-6 py-4',
                        pokemon.types?.[0] ? `bg-elm-${pokemon.types[0]}` : 'bg-gray-300'
                    )}
                >
                    <Link to={href}>
                    <PokemonImage
                        idPokemon={pokemon.id}
                        alt={pokemon.name}
                        size={64}
                        requestedSize={128}
                    />
                    </Link>
                    <div className="text-center mt-1">
                    <Link to={href} className="text-lg font-medium hover:underline">
                        {snakeCaseToTitleCase(pokemon.name)}
                    </Link>
                    <div className="text-xs opacity-70">Generation {pokemon.generation}</div>
                    </div>

                    {pokemon.minLevel && (
                    <div className="absolute top-2 right-2 h-10 px-2 py-1 rounded bg-slate-800 text-xs text-white dark:bg-white dark:text-slate-800 flex flex-col justify-center items-center">
                        <span className="text-[10px]">Lv</span>
                        <span className="text-sm font-bold leading-none">{pokemon.minLevel}</span>
                    </div>
                    )}
                </li>

                {idx < evolution.length - 1 && (
                    <BsArrowRight className="text-2xl text-gray-500 dark:text-gray-300" />
                )}
                </div>
            );
        })}
    </div>
  );
}
