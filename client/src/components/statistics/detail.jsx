import { useQuery } from '@tanstack/react-query';
import { snakeCaseToTitleCase } from '../../utils/string';
import { Link } from 'react-router-dom';

// Define the hook inside this file
const fetchStatistics = async () => {
  const res = await fetch('/generated/statistics/types.json');
  return res.json();
};

const usePokemonStatistics = () =>
    useQuery({
        queryKey: ['pokemon-statistics'],
        queryFn: fetchStatistics
    });

export default function Detail({ activeRibbon }) {
  const { data: statistics } = usePokemonStatistics();
  const { pokemons } = statistics || {};

  if (!activeRibbon) {
    return <div className="2xl:w-56" />;
  }

  const { id, source, target } = activeRibbon;

  return (
    <div className="mx-3.5 mt-4 rounded-md border bg-white pb-2 text-sm dark:bg-dark-card lg:mx-0 lg:mt-0 2xl:w-56">
      {source.id === target.id ? (
        <div className="mb-1 flex items-center gap-2 border-b p-3.5 pb-2.5">
          <div style={{ background: source.color }} className="h-3 w-3 rounded-full" />
          <div>
            Pure {source.id}: <b>{source.value}</b>
          </div>
        </div>
      ) : (
        <div className="mb-1 flex items-center border-b p-3.5 pb-2.5">
          <div style={{ background: source.color }} className="h-3 w-3 rounded-full" />
          <div style={{ background: target.color }} className="ml-0.5 mr-2 h-3 w-3 rounded-full" />
          <div>
            {source.id}-{target.id}: <b>{source.value}</b>
          </div>
        </div>
      )}

      <div className="max-h-96 overflow-auto 2xl:h-[36rem] 2xl:max-h-[36rem]">
        {pokemons?.[id]?.map((pokemonName) => {
          const [mainName, variant = ''] = pokemonName.split('-');
          const hasVariant = variant.length > 1;
          const href = hasVariant ? `${mainName}/${pokemonName}` : pokemonName;

          return (
            <Link
              key={pokemonName}
              to={`/pokemon/${href}`}
              className="block py-1 px-3.5 hover:bg-slate-50 dark:hover:bg-slate-700"
            >
              {snakeCaseToTitleCase(pokemonName)}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
