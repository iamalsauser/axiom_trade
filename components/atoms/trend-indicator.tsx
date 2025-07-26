import React from 'react';

interface TrendIndicatorProps {
  trend: 'up' | 'down' | 'neutral' | 'stable';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const TrendIndicator: React.FC<TrendIndicatorProps> = ({ 
  trend, 
  size = 'md',
  className = '' 
}) => {
  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return 'bg-green-500';
      case 'down':
        return 'bg-red-500';
      case 'stable':
        return 'bg-blue-500';
      default:
        return 'bg-gray-400';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'w-1.5 h-1.5';
      case 'lg':
        return 'w-3 h-3';
      default:
        return 'w-2 h-2';
    }
  };

  const getAriaLabel = () => {
    switch (trend) {
      case 'up':
        return 'Trending upward';
      case 'down':
        return 'Trending downward';
      case 'stable':
        return 'Stable trend';
      default:
        return 'Neutral trend';
    }
  };

  return (
    <span
      className={`inline-block rounded-full ${getTrendColor()} ${getSizeClass()} ${className}`}
      aria-label={getAriaLabel()}
      role="img"
    />
  );
};
