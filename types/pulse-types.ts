// Pulse Dashboard Types

export interface Token {
  id: string;
  name: string;
  subtitle: string;
  marketCap: string;
  price: string;
  volume24h: string;
  transactions24h: string;
  priceChange24h: string;
  holders: string;
  buys: string;
  sells: string;
  address: string;
}

export interface TokenData {
  name: string;
  subtitle: string;
  address: string;
  timeago: string;
  logo: {
    emoji: string;
    border?: string;
  };
  icons: {
    pen: boolean;
    globe: boolean;
    telegram: boolean;
    search: boolean;
  };
  stats: {
    users: string;
    charts: string;
    trophies: string;
    crowns: string;
  };
  percentages: {
    user: { value: string; color: string };
    ghost: { value: string; color: string; time?: string };
    target: { value: string; color: string };
    lock: { value: string; color: string };
    warning: { value: string; color: string };
  };
  marketData: {
    mc: string;
    volume: string;
    f: string;
    tx: string;
  };
  showSolButton: boolean;
  rightIcons: Array<{ icon: string; color: string }>;
} 