import { ResponsiveChord } from '@nivo/chord';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import ArcTooltipMemoized from './arc';
import Detail from './detail';
import RibbonTooltipMemoized from './ribbon';

const fetchStatistics = async () => {
  const res = await fetch('/generated/statistics/types.json');
  if (!res.ok) throw new Error('Failed to fetch type statistics');
  return res.json();
};

export default function PokemonTypeRelation() {
  const [activeRibbon, setActiveRibbon] = useState(null);

  const { data: statistics, isLoading, error } = useQuery({
    queryKey: ['pokemon-statistics'],
    queryFn: fetchStatistics,
  });

  if (isLoading) return <p className="p-4">Loading chord chart...</p>;
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
