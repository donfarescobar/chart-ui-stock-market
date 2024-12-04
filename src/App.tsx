import React, { useState } from 'react';
import { Header } from './components/Header';
import { StockList } from './components/StockList';
import { StockChart } from './components/StockChart';
import { StockDetails } from './components/StockDetails';
import { TimeFrameSelector } from './components/TimeFrameSelector';
import { TechnicalIndicators } from './components/TechnicalIndicators';
import { MarketStats } from './components/MarketStats';
import { mockStocks } from './data/mockStocks';
import type { Stock, CandleData } from './types';
import { format } from 'date-fns';

function generateDramaticPriceData(basePrice: number): CandleData[] {
  const volatility = basePrice * 0.15;
  const data: CandleData[] = [];
  let lastClose = basePrice;

  // Generate data points for the last 24 hours with 30-minute intervals
  const totalPoints = 48; // 24 hours * 2 (30-min intervals)
  
  for (let i = 0; i < totalPoints; i++) {
    const time = new Date();
    time.setMinutes(time.getMinutes() - (totalPoints - i) * 30); // 30-minute intervals
    
    const trend = (Math.sin(i / 5) + Math.random() - 0.5) * 0.8;
    const range = volatility * Math.abs(trend);
    
    const open = Math.max(lastClose, basePrice * 0.8);
    const change = range * trend;
    const close = Math.max(open + change, basePrice * 0.75);
    
    const maxPrice = Math.max(open, close);
    const minPrice = Math.min(open, close);
    const wickRange = range * 0.3;
    
    const high = maxPrice + (wickRange * Math.random());
    const low = Math.max(minPrice - (wickRange * Math.random()), basePrice * 0.7);
    
    data.push({
      time: format(time, 'HH:mm'),
      open,
      high,
      low,
      close,
      volume: Math.floor(Math.random() * 2000000) + 1000000
    });
    
    lastClose = close;
  }

  return data;
}

function App() {
  const [selectedStock, setSelectedStock] = useState(mockStocks[0]);
  const [timeframe, setTimeframe] = useState('1D');
  const chartData = generateDramaticPriceData(selectedStock.price);

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <Header />
      <div className="p-4">
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-1">
              <StockList
                stocks={mockStocks}
                selectedStock={selectedStock}
                onSelectStock={setSelectedStock}
              />
            </div>
            
            <div className="col-span-4 space-y-4">
              <StockDetails stock={selectedStock} />
              
              <div className="flex items-center justify-between">
                <TimeFrameSelector selected={timeframe} onSelect={setTimeframe} />
                <TechnicalIndicators />
              </div>
              
              <div className="bg-gray-900 p-4 rounded-lg">
                <StockChart
                  data={chartData}
                  color={selectedStock.change >= 0 ? '#34D399' : '#F87171'}
                />
              </div>
              
              <MarketStats stock={selectedStock} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;