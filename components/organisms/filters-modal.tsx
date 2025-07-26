import React, { useState } from 'react';

interface FiltersModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilters: (filters: AdvancedFilters) => void;
  className?: string;
}

interface AdvancedFilters {
  priceRange: { min: string; max: string };
  marketCapRange: { min: string; max: string };
  volumeRange: { min: string; max: string };
  change24hRange: { min: string; max: string };
  auditStatus: string[];
  badges: string[];
  sortBy: string;
  sortOrder: 'asc' | 'desc';
}

export const FiltersModal: React.FC<FiltersModalProps> = ({ 
  isOpen, 
  onClose, 
  onApplyFilters,
  className = '' 
}) => {
  const [filters, setFilters] = useState<AdvancedFilters>({
    priceRange: { min: '', max: '' },
    marketCapRange: { min: '', max: '' },
    volumeRange: { min: '', max: '' },
    change24hRange: { min: '', max: '' },
    auditStatus: [],
    badges: [],
    sortBy: 'marketCap',
    sortOrder: 'desc'
  });

  const auditOptions = ['verified', 'pending', 'failed'];
  const badgeOptions = ['verified', 'new', 'trending', 'hot', 'launching'];

  const handleFilterChange = (key: keyof AdvancedFilters, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleRangeChange = (rangeKey: keyof AdvancedFilters, field: 'min' | 'max', value: string) => {
    setFilters(prev => ({
      ...prev,
      [rangeKey]: { ...prev[rangeKey], [field]: value }
    }));
  };

  const handleCheckboxChange = (key: 'auditStatus' | 'badges', value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter(item => item !== value)
        : [...prev[key], value]
    }));
  };

  const handleApply = () => {
    onApplyFilters(filters);
    onClose();
  };

  const handleReset = () => {
    setFilters({
      priceRange: { min: '', max: '' },
      marketCapRange: { min: '', max: '' },
      volumeRange: { min: '', max: '' },
      change24hRange: { min: '', max: '' },
      auditStatus: [],
      badges: [],
      sortBy: 'marketCap',
      sortOrder: 'desc'
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose} />
        
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  Advanced Filters
                </h3>
                
                <div className="space-y-4">
                  {/* Price Range */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        placeholder="Min"
                        value={filters.priceRange.min}
                        onChange={(e) => handleRangeChange('priceRange', 'min', e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <input
                        type="number"
                        placeholder="Max"
                        value={filters.priceRange.max}
                        onChange={(e) => handleRangeChange('priceRange', 'max', e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  {/* Market Cap Range */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Market Cap Range</label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        placeholder="Min"
                        value={filters.marketCapRange.min}
                        onChange={(e) => handleRangeChange('marketCapRange', 'min', e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <input
                        type="number"
                        placeholder="Max"
                        value={filters.marketCapRange.max}
                        onChange={(e) => handleRangeChange('marketCapRange', 'max', e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  {/* Audit Status */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Audit Status</label>
                    <div className="space-y-2">
                      {auditOptions.map(option => (
                        <label key={option} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={filters.auditStatus.includes(option)}
                            onChange={() => handleCheckboxChange('auditStatus', option)}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <span className="ml-2 text-sm text-gray-700 capitalize">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Badges */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Token Badges</label>
                    <div className="space-y-2">
                      {badgeOptions.map(option => (
                        <label key={option} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={filters.badges.includes(option)}
                            onChange={() => handleCheckboxChange('badges', option)}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <span className="ml-2 text-sm text-gray-700 capitalize">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              onClick={handleApply}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Apply Filters
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={onClose}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
