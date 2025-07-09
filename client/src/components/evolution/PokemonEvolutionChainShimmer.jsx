import { BsArrow90DegDown, BsArrowRight } from 'react-icons/bs';
import { useTheme } from '../../hooks/useTheme';

export default function PokemonEvolutionChainShimmer({ n = 3 }) {
  const { isDarkMode } = useTheme(); 

  const shimmerClasses = `shimmer ${isDarkMode ? 'bg-slate-900' : 'bg-gray-300'}`;
  const containerClasses = `pokemon-elm relative mb-1.5 flex gap-3 rounded-md border px-2.5 py-2 ${
    isDarkMode
      ? 'bg-slate-700 border-slate-700'
      : 'bg-gray-200 border-gray-300'
  }`;

  return (
    <ul className="pokemon-evolution">
      <li className={containerClasses}>
        <div className={`${shimmerClasses} h-16 w-16 rounded-md`} />
        <div>
          <div className={`${shimmerClasses} mt-3.5 h-4 w-32 rounded-md`} />
          <div className={`${shimmerClasses} mt-2.5 h-3 w-20 rounded-md`} />
        </div>
      </li>

      <li className={containerClasses}>
        <div className={`${shimmerClasses} h-16 w-16 rounded-md`} />
        <div>
          <div className={`${shimmerClasses} mt-3.5 h-4 w-32 rounded-md`} />
          <div className={`${shimmerClasses} mt-2.5 h-3 w-20 rounded-md`} />
        </div>
        <div className={`text-gray-400 ${isDarkMode ? 'dark:text-gray-300' : ''}`}>
          <BsArrow90DegDown className="absolute -left-6 top-0 -rotate-90 text-xl md:hidden" />
          <BsArrowRight className="absolute -left-7 top-1/2 hidden -translate-y-1/2 text-3xl md:block" />
        </div>
      </li>

      {n > 2 && (
        <li className={containerClasses}>
          <div className={`${shimmerClasses} h-16 w-16 rounded-md`} />
          <div>
            <div className={`${shimmerClasses} mt-3.5 h-4 w-32 rounded-md`} />
            <div className={`${shimmerClasses} mt-2.5 h-3 w-20 rounded-md`} />
          </div>
          <div className={`text-gray-400 ${isDarkMode ? 'dark:text-gray-300' : ''}`}>
            <BsArrow90DegDown className="absolute -left-6 top-0 -rotate-90 text-xl md:hidden" />
            <BsArrowRight className="absolute -left-7 top-1/2 hidden -translate-y-1/2 text-3xl md:block" />
          </div>
        </li>
      )}
    </ul>
  );
}
