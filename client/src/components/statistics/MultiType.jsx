import React from 'react';
import { snakeCaseToTitleCase } from '../../utils/string';

export default function MultiType({ rank }) {
  const [rank1, rank2, rank3] = rank;

  const renderTypePair = (rankItem, index) => {
    const size = [112, 96, 80];
    const iconSize = [(72 * 2) / 3, (60 * 2) / 3, (48 * 2) / 3];

    return (
      <li key={index}>
        <div className="relative flex" style={{ height: size[index], width: size[index] }}>
          <div
            className={`flex h-2/3 w-2/3 items-center justify-center rounded-full bg-elm-${rankItem.type[0]}`}
          >
            <img
              src={`/icons/pokemon-types/${rankItem.type[0]}.svg`}
              alt={rankItem.type[0]}
              width={iconSize[index]}
              height={iconSize[index]}
              className="opacity-50"
            />
          </div>
          <div
            className={`absolute right-0 bottom-0 flex h-2/3 w-2/3 items-center justify-center rounded-full bg-elm-${rankItem.type[1]}`}
          >
            <img
              src={`/icons/pokemon-types/${rankItem.type[1]}.svg`}
              alt={rankItem.type[1]}
              width={iconSize[index]}
              height={iconSize[index]}
              className="opacity-50"
            />
          </div>
        </div>
        <div className="pt-2 text-center">
          <div className="text-sm font-medium">
            {snakeCaseToTitleCase(rankItem.type[0])}/{snakeCaseToTitleCase(rankItem.type[1])}
          </div>
          <div className="text-xs text-gray-400">{rankItem.n} Pokémons</div>
        </div>
      </li>
    );
  };

  return (
    <ol className="flex items-end gap-3.5 pt-4">
      {[rank1, rank2, rank3].map(renderTypePair)}
    </ol>
  );
}
