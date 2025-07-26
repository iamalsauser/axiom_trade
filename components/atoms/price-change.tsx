import React from 'react';

interface PriceChangeProps {
  value: number;
  className?: string;
  showArrow?: boolean;
}

export const PriceChange: React.FC<PriceChangeProps> = ({ 
  value, 
  className = '',
  showArrow = true 
}) => {
  const isPositive = value > 0;
  const isNegative = value < 0;
  const isZero = value === 0;

  const getColorClass = () => {
    if (isPositive) return 'text-green-600';
    if (isNegative) return 'text-red-600';
    return 'text-gray-600';
  };

  const getArrow = () => {
    if (!showArrow) return null;
    if (isPositive) return '↗';
    if (isNegative) return '↘';
    return '→';
  };

  const formatValue = () => {
    const absValue = Math.abs(value);
    const sign = isPositive ? '+' : isNegative ? '-' : '';
    return `${sign}${absValue.toFixed(2)}%`;
  };

  return (
    <span 
      className={`inline-flex items-center gap-1 font-medium ${getColorClass()} ${className}`}
      aria-label={`Price ${isPositive ? 'increased' : isNegative ? 'decreased' : 'unchanged'} by ${Math.abs(value).toFixed(2)}%`}
    >
      {getArrow()}
      {formatValue()}
    </span>
  );
};
