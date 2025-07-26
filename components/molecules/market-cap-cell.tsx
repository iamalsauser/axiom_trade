import React from 'react';

interface MarketCapCellProps {
  value: number;
  showBadge?: boolean;
  className?: string;
}

export const MarketCapCell: React.FC<MarketCapCellProps> = ({ 
  value, 
  showBadge = true,
  className = '' 
}) => {
  const formatMarketCap = (marketCap: number) => {
    if (marketCap >= 1e12) {
      return `$${(marketCap / 1e12).toFixed(2)}T`;
    } else if (marketCap >= 1e9) {
      return `$${(marketCap / 1e9).toFixed(2)}B`;
    } else if (marketCap >= 1e6) {
      return `$${(marketCap / 1e6).toFixed(2)}M`;
    } else if (marketCap >= 1e3) {
      return `$${(marketCap / 1e3).toFixed(2)}K`;
    } else {
      return `$${marketCap.toLocaleString()}`;
    }
  };

  const getBadgeType = () => {
    if (value >= 1e12) return { text: 'Mega Cap', color: 'bg-purple-100 text-purple-800' };
    if (value >= 1e9) return { text: 'Large Cap', color: 'bg-blue-100 text-blue-800' };
    if (value >= 1e6) return { text: 'Mid Cap', color: 'bg-green-100 text-green-800' };
    return { text: 'Small Cap', color: 'bg-gray-100 text-gray-800' };
  };

  const badge = getBadgeType();

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <span className="font-mono text-sm font-medium">
        {formatMarketCap(value)}
      </span>
      {showBadge && (
        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${badge.color}`}>
          {badge.text}
        </span>
      )}
    </div>
  );
};
