import React from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import type { CandleData } from '../types';

interface StockChartProps {
  data: CandleData[];
  color: string;
}

const CustomizedCandlestick = (props: any) => {
  const { x, y, width, height, open, close } = props;
  const isGrowing = close > open;
  const color = isGrowing ? '#34D399' : '#F87171';
  const bodyHeight = Math.abs(close - open);

  return (
    <g>
      <line
        x1={x + width / 2}
        y1={y}
        x2={x + width / 2}
        y2={y + height}
        stroke={color}
        strokeWidth={1}
      />
      <rect
        x={x}
        y={isGrowing ? y + height - bodyHeight : y}
        width={width}
        height={bodyHeight}
        fill={color}
        stroke={color}
      />
    </g>
  );
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const isGrowing = data.close > data.open;
    const color = isGrowing ? '#34D399' : '#F87171';
    
    return (
      <div className="bg-gray-900 p-3 rounded-lg border border-gray-800" style={{ color }}>
        <p className="text-gray-400 mb-2">{label}</p>
        <p>Open: ${data.open.toFixed(2)}</p>
        <p>High: ${data.high.toFixed(2)}</p>
        <p>Low: ${data.low.toFixed(2)}</p>
        <p>Close: ${data.close.toFixed(2)}</p>
        <p className="text-gray-400">Volume: {(data.volume / 1000000).toFixed(2)}M</p>
      </div>
    );
  }
  return null;
};

export function StockChart({ data, color }: StockChartProps) {
  const maxValue = Math.max(...data.map(d => d.high));

  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 20, right: 30, left: 50, bottom: 30 }}>
          <XAxis
            dataKey="time"
            stroke="#9CA3AF"
            tick={{ fill: '#9CA3AF' }}
          />
          <YAxis
            domain={[0, maxValue * 1.1]}
            stroke="#9CA3AF"
            tick={{ fill: '#9CA3AF' }}
            tickFormatter={(value) => `$${value.toFixed(2)}`}
          />
          <Tooltip content={<CustomTooltip />} />
          <ReferenceLine y={data[0].open} stroke="#9CA3AF" strokeDasharray="3 3" />
          <Bar
            dataKey="high"
            fill={color}
            shape={<CustomizedCandlestick />}
            maxBarSize={8}
          />
          <Line
            type="monotone"
            dataKey="close"
            stroke={color}
            dot={false}
            strokeWidth={1}
            opacity={0.5}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}