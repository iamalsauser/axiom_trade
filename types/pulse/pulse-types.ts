
export interface Token {
  id: number | string;
  name: string;
  symbol: string;
  age: string;
  marketCap: number | string;
  price: number | string;
  volume24h: number | string;
  transactions24h: number | string;
  priceChange24h: number | string;
  image: string;
}

export interface TokenData {
  name: string;
  subtitle: string;
  timeago: string;
  logo: {
    background: string;
    border?: string;
    emoji: string;
    badge: string;
  };
  stats: {
    users: number;
    charts: number;
    trophies: number;
    crowns: number;
  };
  address: string;
  marketData: {
    mc: string;
    volume: string;
    f: string;
    tx: string;
  };
  percentages: {
    user: { value: string; color: string };
    ghost: { value: string; time?: string; color: string };
    target: { value: string; color: string };
    lock: { value: string; color: string };
    warning: { value: string; color: string };
  };
  icons: {
    pen: boolean;
    globe: boolean;
    telegram: boolean;
    search: boolean;
  };
  rightIcons: Array<{ icon: string; color: string }>;
  showSolButton: boolean;
}
