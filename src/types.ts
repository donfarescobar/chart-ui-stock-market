export interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  marketCap: number;
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
}

export interface CandleData {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}