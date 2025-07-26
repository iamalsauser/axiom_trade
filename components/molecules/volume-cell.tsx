import React from 'react';

interface VolumeCellProps {
  value: number;
  change24h?: number;
  showTrend?: boolean;
  className?: string;
}

export const VolumeCell: React.FC<VolumeCellProps> = ({ 
  value, 
  change24h,
  showTrend = true,
  className = '' 
}) => {
  const formatVolume = (volume: number) => {
    if (volume >= 1e12) {
      return `$${(volume / 1e12).toFixed(2)}T`;
    } else if (volume >= 1e9) {
      return `$${(volume / 1e9).toFixed(2)}B`;
    } else if (volume >= 1e6) {
      return `$${(volume / 1e6).toFixed(2)}M`;
    } else if (volume >= 1e3) {
      return `$${(volume / 1e3).toFixed(2)}K`;
    } else {
      return `$${volume.toLocaleString()}`;
    }
  };

  const getVolumeBadge = (volume: number) => {
    if (volume >= 1e9) return { text: 'High Volume', color: 'bg-green-100 text-green-800' };
    if (volume >= 1e6) return { text: 'Medium Volume', color: 'bg-yellow-100 text-yellow-800' };
    return { text: 'Low Volume', color: 'bg-gray-100 text-gray-800' };
  };

  const getChangeColor = (change: number) => {
    if (change > 0) return 'text-green-600';
    if (change < 0) return 'text-red-600';
    return 'text-gray-600';
  };

  const volumeBadge = getVolumeBadge(value);

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <div className="flex items-center gap-2">
        <span className="font-mono text-sm font-medium">
          {formatVolume(value)}
        </span>
        {showTrend && (
          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${volumeBadge.color}`}>
            {volumeBadge.text}
          </span>
        )}
      </div>
      {change24h !== undefined && (
        <div className={`flex items-center gap-1 text-xs ${getChangeColor(change24h)}`}>
          <span>{change24h > 0 ? '↗' : change24h < 0 ? '↘' : '→'}</span>
          <span>{Math.abs(change24h).toFixed(1)}%</span>
        </div>
      )}
    </div>
  );
};
