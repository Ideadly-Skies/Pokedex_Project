import { useQuery } from '@tanstack/react-query';
import { snakeCaseToTitleCase } from '../../utils/string';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';

const fetchStatistics = async () => {
  const res = await fetch('/generated/statistics/types.json');
  return res.json();
};

const usePokemonStatistics = () =>
  useQuery({
    queryKey: ['pokemon-statistics'],
    queryFn: fetchStatistics,
  });

export default function Detail({ activeRibbon }) {
  const { data: statistics } = usePokemonStatistics();
  const { pokemons } = statistics || {};
  const { isDarkMode } = useTheme();

  if (!activeRibbon) return <div className="2xl:w-56" />;

  const { id, source, target } = activeRibbon;

  return (
    <div
      className={`mx-3.5 mt-4 rounded-md border text-sm lg:mx-0 lg:mt-0 2xl:w-56
        ${isDarkMode
          ? 'bg-slate-800 border-slate-700 text-slate-100'
          : 'bg-white border-slate-200 text-slate-800'
        }`}
    >
      <div
        className={`mb-1 flex items-center gap-2 border-b p-3.5 pb-2.5
          ${isDarkMode ? 'border-slate-700' : 'border-slate-200'}`}
      >
        <div
          style={{ background: source.color }}
          className="h-3 w-3 rounded-full"
        />
        {source.id !== target.id && (
          <div
            style={{ background: target.color }}
            className="ml-0.5 mr-2 h-3 w-3 rounded-full"
          />
        )}
        <div>
          {source.id === target.id ? (
            <>
              <span className="font-medium">Pure {source.id}</span>: <b>{source.value}</b>
            </>
          ) : (
            <>
              <span className="font-medium">{source.id}-{target.id}</span>: <b>{source.value}</b>
            </>
          )}
        </div>
      </div>

      <div className="max-h-96 overflow-auto 2xl:h-[36rem] 2xl:max-h-[36rem]">
        {pokemons?.[id]?.map((pokemonName) => {
          const [mainName, variant = ''] = pokemonName.split('-');
          const hasVariant = variant.length > 1;
          const href = hasVariant ? `${mainName}/${pokemonName}` : pokemonName;

          return (
            <Link
              key={pokemonName}
              to={`/pokemon/${href}`}
              className={`block px-3.5 py-1 transition-colors ${
                isDarkMode
                  ? 'hover:bg-slate-700 text-slate-100'
                  : 'hover:bg-slate-100 text-slate-800'
              }`}
            >
              {snakeCaseToTitleCase(pokemonName)}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
