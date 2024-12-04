import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import type { Stock } from '../types';

interface StockListProps {
  stocks: Stock[];
  selectedStock: Stock;
  onSelectStock: (stock: Stock) => void;
}

export function StockList({ stocks, selectedStock, onSelectStock }: StockListProps) {
  return (
    <div className="bg-gray-900 p-4 rounded-lg h-[calc(100vh-6rem)] overflow-y-auto">
      <div className="space-y-2">
        {stocks.map((stock) => (
          <div
            key={stock.symbol}
            onClick={() => onSelectStock(stock)}
            className={`flex items-center justify-between p-3 rounded cursor-pointer transition-colors ${
              selectedStock.symbol === stock.symbol
                ? 'bg-blue-500/20 hover:bg-blue-500/30'
                : 'bg-gray-800 hover:bg-gray-700'
            }`}
          >
            <div>
              <div className="text-white font-semibold">{stock.symbol}</div>
              <div className="text-gray-400 text-sm truncate max-w-[120px]">{stock.name}</div>
            </div>
            <div className="text-right">
              <div className="text-white font-mono">${stock.price.toFixed(2)}</div>
              <div className={`flex items-center text-sm ${stock.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {stock.change >= 0 ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                {stock.changePercent.toFixed(2)}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}