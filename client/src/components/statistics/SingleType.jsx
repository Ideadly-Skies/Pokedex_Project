import React from 'react';
import { snakeCaseToTitleCase } from '../../utils/string';

export default function SingleType({ rank }) {
  const [rank1, rank2, rank3] = rank;

  return (
    <ol className="flex items-end gap-3.5 pt-4">
      {[rank1, rank2, rank3].map((item, index) => {
        const size = [112, 96, 80]; // h/w: 28, 24, 20 rem in px
        const iconSize = [72, 60, 48];

        return (
          <li key={index}>
            <div
              className={`flex h-${size[index]} w-${size[index]} items-center justify-center rounded-full bg-elm-${item.type[0]}`}
              style={{ height: size[index], width: size[index] }}
            >
              <img
                src={`/icons/pokemon-types/${item.type[0]}.svg`}
                alt={item.type[0]}
                width={iconSize[index]}
                height={iconSize[index]}
                className="opacity-50"
              />
            </div>
            <div className="pt-2 text-center">
              <div className="text-sm font-medium">{snakeCaseToTitleCase(item.type[0])}</div>
              <div className="text-xs text-gray-400">{item.n} Pokémons</div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}