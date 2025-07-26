import React, { useState } from 'react';

interface TableFiltersProps {
  onFiltersChange: (filters: FilterState) => void;
  className?: string;
}

interface FilterState {
  search: string;
  minPrice: string;
  maxPrice: string;
  minMarketCap: string;
  maxMarketCap: string;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
}

export const TableFilters: React.FC<TableFiltersProps> = ({ 
  onFiltersChange,
  className = '' 
}) => {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    minPrice: '',
    maxPrice: '',
    minMarketCap: '',
    maxMarketCap: '',
    sortBy: 'marketCap',
    sortOrder: 'desc'
  });

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      search: '',
      minPrice: '',
      maxPrice: '',
      minMarketCap: '',
      maxMarketCap: '',
      sortBy: 'marketCap',
      sortOrder: 'desc'
    };
    setFilters(clearedFilters);
    onFiltersChange(clearedFilters);
  };

  return (
    <div className={`bg-white border-b border-gray-200 p-4 ${className}`}>
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
        {/* Search */}
        <div className="flex-1 min-w-0">
          <div className="relative">
            <input
              type="text"
              placeholder="Search tokens..."
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Price Range */}
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min Price"
            value={filters.minPrice}
            onChange={(e) => handleFilterChange('minPrice', e.target.value)}
            className="w-24 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={filters.maxPrice}
            onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
            className="w-24 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Market Cap Range */}
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min MC"
            value={filters.minMarketCap}
            onChange={(e) => handleFilterChange('minMarketCap', e.target.value)}
            className="w-24 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="number"
            placeholder="Max MC"
            value={filters.maxMarketCap}
            onChange={(e) => handleFilterChange('maxMarketCap', e.target.value)}
            className="w-24 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Sort */}
        <div className="flex gap-2">
          <select
            value={filters.sortBy}
            onChange={(e) => handleFilterChange('sortBy', e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="marketCap">Market Cap</option>
            <option value="price">Price</option>
            <option value="volume">Volume</option>
            <option value="change24h">24h Change</option>
            <option value="name">Name</option>
          </select>
          <button
            onClick={() => handleFilterChange('sortOrder', filters.sortOrder === 'asc' ? 'desc' : 'asc')}
            className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {filters.sortOrder === 'asc' ? '↑' : '↓'}
          </button>
        </div>

        {/* Clear Filters */}
        <button
          onClick={clearFilters}
          className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Clear
        </button>
      </div>
    </div>
  );
};
