import React from 'react';

interface TableHeaderProps {
  onSort: (column: string) => void;
  sortColumn: string;
  sortOrder: 'asc' | 'desc';
  className?: string;
}

export const TableHeader: React.FC<TableHeaderProps> = ({ 
  onSort, 
  sortColumn, 
  sortOrder,
  className = '' 
}) => {
  const columns = [
    { key: 'token', label: 'Token', sortable: false, width: 'w-64' },
    { key: 'price', label: 'Price', sortable: true, width: 'w-32' },
    { key: 'change24h', label: '24h Change', sortable: true, width: 'w-32' },
    { key: 'marketCap', label: 'Market Cap', sortable: true, width: 'w-40' },
    { key: 'volume', label: 'Volume', sortable: true, width: 'w-40' },
    { key: 'transactions', label: 'Transactions', sortable: true, width: 'w-32' },
    { key: 'audit', label: 'Audit', sortable: false, width: 'w-24' },
    { key: 'actions', label: 'Actions', sortable: false, width: 'w-24' },
  ];

  const getSortIcon = (columnKey: string) => {
    if (sortColumn !== columnKey) {
      return (
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      );
    }
    
    return sortOrder === 'asc' ? (
      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    ) : (
      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    );
  };

  return (
    <thead className={`bg-gray-50 ${className}`}>
      <tr>
        {columns.map((column) => (
          <th
            key={column.key}
            className={`
              ${column.width} px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider
              ${column.sortable 
                ? 'cursor-pointer hover:bg-gray-100 select-none' 
                : 'cursor-default'
              }
            `}
            onClick={() => column.sortable && onSort(column.key)}
          >
            <div className="flex items-center gap-2">
              <span>{column.label}</span>
              {column.sortable && getSortIcon(column.key)}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};
