// components/statistics/TypeGridItem.jsx
import React from 'react';
import { snakeCaseToTitleCase } from '../../utils/string';
import { useTheme } from '../../hooks/useTheme';

export default function TypeGridItem({ type, total, single }) {
    const { isDarkMode } = useTheme();

    return (
        <div className="flex items-center gap-4">
        <img
            src={`/icons/pokemon-types/${type}.svg`}
            alt={type}
            className={`w-6 h-6 ${!isDarkMode ? 'invert' : ''}`}
        />
        <div>
            <p className="font-medium">{snakeCaseToTitleCase(type)}</p>
            <p className="text-sm text-gray-400">
            {total} pokemons <br />
            <span className="italic text-gray-500">({single} single-type)</span>
            </p>
        </div>
        </div>
    );
}
