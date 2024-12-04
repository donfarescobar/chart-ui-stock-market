import React from 'react';

export function TechnicalIndicators() {
  return (
    <div className="flex space-x-4 bg-gray-900 p-2 rounded-lg">
      <button className="px-3 py-1 text-gray-400 hover:bg-gray-800 rounded">VOL</button>
      <button className="px-3 py-1 text-gray-400 hover:bg-gray-800 rounded">Vol.ratio</button>
      <button className="px-3 py-1 text-gray-400 hover:bg-gray-800 rounded">KDJ</button>
      <button className="px-3 py-1 text-gray-400 hover:bg-gray-800 rounded">MACD</button>
      <button className="px-3 py-1 text-gray-400 hover:bg-gray-800 rounded">RSI</button>
    </div>
  );
}