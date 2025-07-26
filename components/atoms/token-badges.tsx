import React from 'react';

interface TokenBadgeProps {
  type: 'verified' | 'new' | 'trending' | 'hot' | 'verified' | 'launching';
  className?: string;
}

export const TokenBadge: React.FC<TokenBadgeProps> = ({ 
  type, 
  className = '' 
}) => {
  const getBadgeConfig = () => {
    switch (type) {
      case 'verified':
        return {
          text: 'Verified',
          color: 'bg-blue-100 text-blue-800 border-blue-200',
          icon: '✓'
        };
      case 'new':
        return {
          text: 'New',
          color: 'bg-green-100 text-green-800 border-green-200',
          icon: '🆕'
        };
      case 'trending':
        return {
          text: 'Trending',
          color: 'bg-purple-100 text-purple-800 border-purple-200',
          icon: '📈'
        };
      case 'hot':
        return {
          text: 'Hot',
          color: 'bg-red-100 text-red-800 border-red-200',
          icon: '🔥'
        };
      case 'launching':
        return {
          text: 'Launching',
          color: 'bg-orange-100 text-orange-800 border-orange-200',
          icon: '🚀'
        };
      default:
        return {
          text: type,
          color: 'bg-gray-100 text-gray-800 border-gray-200',
          icon: '•'
        };
    }
  };

  const config = getBadgeConfig();

  return (
    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${config.color} ${className}`}>
      <span className="text-xs">{config.icon}</span>
      {config.text}
    </div>
  );
};
