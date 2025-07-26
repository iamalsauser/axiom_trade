import React from 'react';

interface SubNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  className?: string;
}

export const SubNavigation: React.FC<SubNavigationProps> = ({ 
  activeTab, 
  onTabChange,
  className = '' 
}) => {
  const tabs = [
    { id: 'all', label: 'All Tokens', count: 1250 },
    { id: 'new', label: 'New Pairs', count: 45 },
    { id: 'trending', label: 'Trending', count: 23 },
    { id: 'final-stretch', label: 'Final Stretch', count: 12 },
    { id: 'migrated', label: 'Migrated', count: 8 },
  ];

  return (
    <div className={`border-b border-gray-200 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex space-x-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`
                py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap
                ${activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              <div className="flex items-center gap-2">
                <span>{tab.label}</span>
                <span className={`
                  inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium
                  ${activeTab === tab.id
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-800'
                  }
                `}>
                  {tab.count}
                </span>
              </div>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};
