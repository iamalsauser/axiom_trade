import React from 'react';

interface TransactionCellProps {
  count: number;
  change24h?: number;
  className?: string;
}

export const TransactionCell: React.FC<TransactionCellProps> = ({ 
  count, 
  change24h,
  className = '' 
}) => {
  const formatCount = (num: number) => {
    if (num >= 1e6) {
      return `${(num / 1e6).toFixed(1)}M`;
    } else if (num >= 1e3) {
      return `${(num / 1e3).toFixed(1)}K`;
    } else {
      return num.toLocaleString();
    }
  };

  const getChangeColor = (change: number) => {
    if (change > 0) return 'text-green-600';
    if (change < 0) return 'text-red-600';
    return 'text-gray-600';
  };

  const getChangeIcon = (change: number) => {
    if (change > 0) return '↗';
    if (change < 0) return '↘';
    return '→';
  };

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <span className="font-mono text-sm font-medium">
        {formatCount(count)}
      </span>
      {change24h !== undefined && (
        <div className={`flex items-center gap-1 text-xs ${getChangeColor(change24h)}`}>
          <span>{getChangeIcon(change24h)}</span>
          <span>{Math.abs(change24h).toFixed(1)}%</span>
        </div>
      )}
    </div>
  );
};
