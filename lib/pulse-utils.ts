// Pulse Dashboard Utilities

export const formatMarketCap = (value: string | number): string => {
  const num = typeof value === 'string' ? parseFloat(value) : value;
  if (num >= 1e9) {
    return `$${(num / 1e9).toFixed(1)}B`;
  } else if (num >= 1e6) {
    return `$${(num / 1e6).toFixed(1)}M`;
  } else if (num >= 1e3) {
    return `$${(num / 1e3).toFixed(1)}K`;
  }
  return `$${num.toFixed(2)}`;
};

export const formatPrice = (value: string | number): string => {
  const num = typeof value === 'string' ? parseFloat(value) : value;
  if (num < 0.01) {
    return `$${num.toFixed(6)}`;
  } else if (num < 1) {
    return `$${num.toFixed(4)}`;
  } else if (num < 100) {
    return `$${num.toFixed(3)}`;
  }
  return `$${num.toFixed(2)}`;
};

export const formatNumber = (value: string | number): string => {
  const num = typeof value === 'string' ? parseFloat(value) : value;
  if (num >= 1e9) {
    return `${(num / 1e9).toFixed(1)}B`;
  } else if (num >= 1e6) {
    return `${(num / 1e6).toFixed(1)}M`;
  } else if (num >= 1e3) {
    return `${(num / 1e3).toFixed(1)}K`;
  }
  return num.toLocaleString();
};