import React, { useState, useEffect } from 'react';
import { TableHeader } from './table-header';
import { TableRow } from './table-row';
import { TableFilters } from './table-filters';
import { FiltersModal } from './filters-modal';
import { TradingSettingsModal } from './trading-settings-modal';
import { ActionButton } from '../molecules/action-button';

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

interface TokenTableProps {
  tokens: Token[];
  className?: string;
}

export const TokenTable: React.FC<TokenTableProps> = ({ 
  tokens, 
  className = '' 
}) => {
  const [sortColumn, setSortColumn] = useState('marketCap');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [filters, setFilters] = useState<any>({});
  const [showFiltersModal, setShowFiltersModal] = useState(false);
  const [showTradingSettings, setShowTradingSettings] = useState(false);
  const [filteredTokens, setFilteredTokens] = useState<Token[]>(tokens);

  // Apply sorting and filtering
  useEffect(() => {
    let result = [...tokens];

    // Apply filters
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(token => 
        token.name.toLowerCase().includes(searchLower) ||
        token.symbol.toLowerCase().includes(searchLower)
      );
    }

    if (filters.minPrice) {
      result = result.filter(token => token.price >= parseFloat(filters.minPrice));
    }

    if (filters.maxPrice) {
      result = result.filter(token => token.price <= parseFloat(filters.maxPrice));
    }

    if (filters.minMarketCap) {
      result = result.filter(token => token.marketCap >= parseFloat(filters.minMarketCap));
    }

    if (filters.maxMarketCap) {
      result = result.filter(token => token.marketCap <= parseFloat(filters.maxMarketCap));
    }

    // Apply sorting
    result.sort((a, b) => {
      let aValue: any = a[sortColumn as keyof Token];
      let bValue: any = b[sortColumn as keyof Token];

      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    setFilteredTokens(result);
  }, [tokens, sortColumn, sortOrder, filters]);

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortOrder('desc');
    }
  };

  const handleFiltersChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  const handleTrade = (token: Token) => {
    console.log('Trade token:', token);
    // Implement trading logic
  };

  const handleWatchlist = (token: Token) => {
    console.log('Add to watchlist:', token);
    // Implement watchlist logic
  };

  const handleAdvancedFilters = (advancedFilters: any) => {
    setFilters(prev => ({ ...prev, ...advancedFilters }));
  };

  const handleTradingSettings = (settings: any) => {
    console.log('Trading settings updated:', settings);
    // Implement settings save logic
  };

  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 ${className}`}>
      {/* Table Controls */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold text-gray-900">Token Discovery</h2>
            <span className="text-sm text-gray-500">({filteredTokens.length} tokens)</span>
          </div>
          <div className="flex gap-2">
            <ActionButton
              variant="outline"
              onClick={() => setShowFiltersModal(true)}
            >
              Advanced Filters
            </ActionButton>
            <ActionButton
              variant="outline"
              onClick={() => setShowTradingSettings(true)}
            >
              Trading Settings
            </ActionButton>
          </div>
        </div>
      </div>

      {/* Filters */}
      <TableFilters onFiltersChange={handleFiltersChange} />

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <TableHeader
            onSort={handleSort}
            sortColumn={sortColumn}
            sortOrder={sortOrder}
          />
          <tbody className="bg-white divide-y divide-gray-100">
            {filteredTokens.map((token) => (
              <TableRow
                key={token.id}
                token={token}
                onTrade={handleTrade}
                onWatchlist={handleWatchlist}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {filteredTokens.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No tokens found</h3>
          <p className="text-gray-500">Try adjusting your filters or search terms.</p>
        </div>
      )}

      {/* Modals */}
      <FiltersModal
        isOpen={showFiltersModal}
        onClose={() => setShowFiltersModal(false)}
        onApplyFilters={handleAdvancedFilters}
      />
      
      <TradingSettingsModal
        isOpen={showTradingSettings}
        onClose={() => setShowTradingSettings(false)}
        onSave={handleTradingSettings}
      />
    </div>
  );
};
