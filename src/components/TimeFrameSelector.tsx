import React from 'react';
import { clsx } from 'clsx';

interface TimeFrameProps {
  selected: string;
  onSelect: (timeframe: string) => void;
}

export function TimeFrameSelector({ selected, onSelect }: TimeFrameProps) {
  const timeframes = ['5Days', '1D', '1m', '3m', '6m', '1y', '5y'];

  return (
    <div className="flex items-center space-x-2 bg-gray-900 p-2 rounded-lg">
      {timeframes.map((tf) => (
        <button
          key={tf}
          onClick={() => onSelect(tf)}
          className={clsx(
            'px-3 py-1 rounded text-sm',
            selected === tf
              ? 'bg-blue-500 text-white'
              : 'text-gray-400 hover:bg-gray-800'
          )}
        >
          {tf}
        </button>
      ))}
    </div>
  );
}