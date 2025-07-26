import React from 'react';
import { TokenInfo } from '../molecules/token-info';
import { PriceChange } from '../atoms/price-change';
import { MarketCapCell } from '../molecules/market-cap-cell';
import { VolumeCell } from '../molecules/volume-cell';
import { TransactionCell } from '../molecules/transaction-cell';
import { AuditCell } from '../molecules/audit-cell';
import { ActionButton } from '../molecules/action-button';
import { ActionMenu } from '../molecules/action-menu';

interface Token {
  id: string;
  name: string;
  symbol: string;
  logo: string;
  price: number;
  change24h: number;
  marketCap: number;
  volume: number;
  transactions: number;
  auditScore?: number;
  auditStatus?: 'verified' | 'pending' | 'failed';
  lastAuditDate?: string;
  badges?: Array<'verified' | 'new' | 'trending' | 'hot' | 'launching'>;
}

interface TableRowProps {
  token: Token;
  onTrade: (token: Token) => void;
  onWatchlist: (token: Token) => void;
  className?: string;
}

export const TableRow: React.FC<TableRowProps> = ({ 
  token, 
  onTrade, 
  onWatchlist,
  className = '' 
}) => {
  const actionMenuItems = [
    {
      id: 'trade',
      label: 'Trade',
      icon: '💱',
      onClick: () => onTrade(token)
    },
    {
      id: 'watchlist',
      label: 'Add to Watchlist',
      icon: '👁️',
      onClick: () => onWatchlist(token)
    },
    {
      id: 'chart',
      label: 'View Chart',
      icon: '📈',
      onClick: () => console.log('View chart for', token.symbol)
    },
    {
      id: 'info',
      label: 'Token Info',
      icon: 'ℹ️',
      onClick: () => console.log('Token info for', token.symbol)
    }
  ];

  return (
    <tr className={`border-t border-gray-100 hover:bg-gray-50 transition-colors ${className}`}>
      {/* Token Info */}
      <td className="px-4 py-3">
        <TokenInfo
          logo={token.logo}
          name={token.name}
          symbol={token.symbol}
          badges={token.badges}
        />
      </td>

      {/* Price */}
      <td className="px-4 py-3 text-right">
        <span className="font-mono text-sm font-medium">
          ${token.price.toFixed(6)}
        </span>
      </td>

      {/* 24h Change */}
      <td className="px-4 py-3 text-right">
        <PriceChange value={token.change24h} />
      </td>

      {/* Market Cap */}
      <td className="px-4 py-3 text-right">
        <MarketCapCell value={token.marketCap} />
      </td>

      {/* Volume */}
      <td className="px-4 py-3 text-right">
        <VolumeCell value={token.volume} />
      </td>

      {/* Transactions */}
      <td className="px-4 py-3 text-right">
        <TransactionCell count={token.transactions} />
      </td>

      {/* Audit */}
      <td className="px-4 py-3 text-center">
        <AuditCell
          score={token.auditScore}
          status={token.auditStatus}
          lastAuditDate={token.lastAuditDate}
        />
      </td>

      {/* Actions */}
      <td className="px-4 py-3 text-center">
        <ActionMenu
          items={actionMenuItems}
          trigger={
            <ActionButton variant="outline" size="sm">
              Actions
            </ActionButton>
          }
        />
      </td>
    </tr>
  );
};
