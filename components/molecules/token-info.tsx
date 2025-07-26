import React from 'react';
import { TokenLogo } from '../atoms/token-logo';
import { TokenBadge } from '../atoms/token-badges';

interface TokenInfoProps {
  logo: string;
  name: string;
  symbol: string;
  badges?: Array<'verified' | 'new' | 'trending' | 'hot' | 'launching'>;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const TokenInfo: React.FC<TokenInfoProps> = ({ 
  logo, 
  name, 
  symbol, 
  badges = [],
  size = 'md',
  className = '' 
}) => {
  const getLogoSize = () => {
    switch (size) {
      case 'sm': return 24;
      case 'lg': return 48;
      default: return 32;
    }
  };

  const getTextSize = () => {
    switch (size) {
      case 'sm': return 'text-xs';
      case 'lg': return 'text-lg';
      default: return 'text-sm';
    }
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <TokenLogo 
        src={logo} 
        alt={`${name} logo`} 
        size={getLogoSize()} 
      />
      <div className="flex flex-col min-w-0">
        <div className="flex items-center gap-2">
          <span className={`font-medium text-gray-900 truncate ${getTextSize()}`}>
            {name}
          </span>
          {badges.map((badge, index) => (
            <TokenBadge key={index} type={badge} />
          ))}
        </div>
        <span className="text-xs text-gray-500 font-mono">
          {symbol}
        </span>
      </div>
    </div>
  );
};
