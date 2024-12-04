import React from 'react';
import type { Stock } from '../types';

interface StockDetailsProps {
  stock: Stock;
}

export function StockDetails({ stock }: StockDetailsProps) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">{stock.name} ({stock.symbol})</h2>
          <div className="text-3xl font-mono text-white">${stock.price.toFixed(2)}</div>
          <div className={`text-lg ${stock.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-gray-400">Open</div>
            <div className="text-white font-mono">${stock.stats.open.toFixed(2)}</div>
          </div>
          <div>
            <div className="text-gray-400">Close</div>
            <div className="text-white font-mono">${stock.stats.close.toFixed(2)}</div>
          </div>
          <div>
            <div className="text-gray-400">High</div>
            <div className="text-white font-mono">${stock.stats.high.toFixed(2)}</div>
          </div>
          <div>
            <div className="text-gray-400">Low</div>
            <div className="text-white font-mono">${stock.stats.low.toFixed(2)}</div>
          </div>
          <div>
            <div className="text-gray-400">Volume</div>
            <div className="text-white font-mono">{(stock.stats.volume / 1000000).toFixed(2)}M</div>
          </div>
          <div>
            <div className="text-gray-400">Market Cap</div>
            <div className="text-white font-mono">${(stock.stats.marketCap / 1000000000).toFixed(2)}B</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StockDetails;