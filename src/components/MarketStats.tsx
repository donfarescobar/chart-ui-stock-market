import React from 'react';
import { Info } from 'lucide-react';

interface MarketStatsProps {
  stock: {
    symbol: string;
    name: string;
    price: number;
    change: number;
    changePercent: number;
    stats: {
      high: number;
      low: number;
      open: number;
      close: number;
      volume: number;
      marketCap: number;
      peRatio: number;
      dividend: number;
      shortRatio: number;
    };
  };
}

export function MarketStats({ stock }: MarketStatsProps) {
  return (
    <div className="bg-gray-900 rounded-lg p-4">
      <div className="grid grid-cols-4 gap-4">
        <StatItem label="High" value={`$${stock.stats.high.toFixed(3)}`} />
        <StatItem label="Open" value={`$${stock.stats.open.toFixed(3)}`} />
        <StatItem label="Volume" value={`${(stock.stats.volume / 1000000).toFixed(2)}M`} />
        <StatItem label="P/E(TTM)" value={stock.stats.peRatio.toFixed(3)} />
        
        <StatItem label="Low" value={`$${stock.stats.low.toFixed(3)}`} />
        <StatItem label="Close" value={`$${stock.stats.close.toFixed(3)}`} />
        <StatItem label="Market Cap" value={`$${(stock.stats.marketCap / 1000000000).toFixed(2)}B`} />
        <StatItem label="Dividend TTM" value={`${stock.stats.dividend.toFixed(3)}%`} />
        
        <StatItem label="52wk High" value={`$${(stock.stats.high * 1.1).toFixed(3)}`} />
        <StatItem label="Avg Price" value={`$${((stock.stats.high + stock.stats.low) / 2).toFixed(3)}`} />
        <StatItem label="Short Ratio" value={`${stock.stats.shortRatio.toFixed(2)}%`} />
        <StatItem label="Float" value={`${(stock.stats.marketCap / stock.price / 1000000).toFixed(2)}M`} />
      </div>
    </div>
  );
}

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center text-gray-400 text-sm">
        {label}
        <Info size={14} className="ml-1 cursor-help" />
      </div>
      <div className="text-white font-mono">{value}</div>
    </div>
  );
}