import { ResponsiveChord } from '@nivo/chord';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import ArcTooltipMemoized from './arc';
import Detail from './detail';
import RibbonTooltipMemoized from './ribbon';

import { useTheme } from '../../hooks/useTheme';

const fetchStatistics = async () => {
  const res = await fetch('/generated/statistics/types.json');
  if (!res.ok) throw new Error('Failed to fetch type statistics');
  return res.json();
};

export default function PokemonTypeRelation() {
  const { isDarkMode } = useTheme();
  const [activeRibbon, setActiveRibbon] = useState(null);

  const { data: statistics, isLoading, error } = useQuery({
    queryKey: ['pokemon-statistics'],
    queryFn: fetchStatistics,
  });

  if (isLoading) {
    return (
      <div className="py-8 text-center">
        <div className="animate-spin h-10 w-10 mx-auto rounded-full border-t-4 border-red-600 border-opacity-50 mb-4" />
        <p className={`${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Loading Type Relation Chart...</p>
      </div>
    );
  } 
    
  if (error) return <p className="p-4 text-red-500">Error loading data</p>;
  if (!statistics) return null;

  const { keys, colors, data } = statistics;

  return (
    <div className="-mx-3.5 lg:mx-0 2xl:-mr-32 2xl:flex 2xl:items-center 2xl:gap-6">
      <div className="aspect-square w-full flex-1 2xl:max-w-[calc(100%_-_15.5rem)]">
        <ResponsiveChord
          keys={keys}
          data={data}
          margin={{ top: 36, right: 36, bottom: 36, left: 36 }}
          padAngle={0.02}
          innerRadiusRatio={0.96}
          innerRadiusOffset={0.02}
          inactiveArcOpacity={0.25}
          arcBorderColor={{
            from: 'color',
            modifiers: [['darker', 0.6]],
          }}
          activeRibbonOpacity={0.75}
          inactiveRibbonOpacity={0.25}
          ribbonBorderColor={{
            from: 'color',
            modifiers: [['darker', 0.6]],
          }}
          labelTextColor={{
            from: 'color',
            modifiers: [['darker', 1]],
          }}
          colors={colors}
          theme={{ fontSize: 12 }}
          motionConfig="stiff"
          arcTooltip={ArcTooltipMemoized}
          ribbonTooltip={RibbonTooltipMemoized}
          onRibbonMouseEnter={setActiveRibbon}
        />
      </div>

      <Detail activeRibbon={activeRibbon} />
    </div>
  );
}
