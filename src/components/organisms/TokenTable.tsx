import React, { useState } from 'react';
import { TokenInfo } from '../molecules/TokenInfo';
import { MarketCapCell } from '../molecules/MarketCapCell';
import { VolumeCell } from '../molecules/VolumeCell';
import { ActionButton } from '../molecules/ActionButton';
import { PriceChange } from '../atoms/PriceChange';
import { Modal } from '../ui/Modal';

// Simple Tooltip component
const Tooltip: React.FC<{ text: string; children: React.ReactNode }> = ({ text, children }) => {
  const [show, setShow] = useState(false);
  return (
    <span className="relative" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      {children}
      {show && (
        <span className="absolute z-10 left-1/2 -translate-x-1/2 mt-2 px-2 py-1 rounded bg-gray-800 text-white text-xs whitespace-nowrap shadow-lg">
          {text}
        </span>
      )}
    </span>
  );
};

// Simple Popover component
const Popover: React.FC<{ content: React.ReactNode; children: React.ReactNode }> = ({ content, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <span className="relative">
      <span onClick={() => setOpen((v) => !v)} className="cursor-pointer underline decoration-dotted">
        {children}
      </span>
      {open && (
        <span className="absolute z-20 left-1/2 -translate-x-1/2 mt-2 px-4 py-2 rounded bg-white border border-gray-200 shadow-xl text-sm w-64">
          {content}
          <button className="mt-2 text-xs text-primary underline" onClick={() => setOpen(false)}>
            Close
          </button>
        </span>
      )}
    </span>
  );
};

// Placeholder token data
const tokens = [
  {
    logo: '/images/axiom-logo.png',
    name: 'Axiom',
    symbol: 'AXIOM',
    price: 1.23,
    change24h: 2.5,
    marketCap: 1500000000,
    volume: 12000000,
    description: 'Axiom is a next-gen trading protocol for crypto markets.'
  },
  {
    logo: '/images/bc-token.png',
    name: 'BlockChainX',
    symbol: 'BCX',
    price: 0.98,
    change24h: -1.2,
    marketCap: 800000000,
    volume: 9500000,
    description: 'BlockChainX powers scalable blockchain infrastructure.'
  },
  {
    logo: '/images/dove-token.png',
    name: 'Dove',
    symbol: 'DOVE',
    price: 2.45,
    change24h: 0.0,
    marketCap: 2100000000,
    volume: 25000000,
    description: 'Dove is a privacy-focused DeFi token.'
  },
];

type SortKey = 'name' | 'symbol' | 'price' | 'change24h' | 'marketCap' | 'volume';
type SortOrder = 'asc' | 'desc';

const columns: { key: SortKey; label: string; align?: string }[] = [
  { key: 'name', label: 'Token', align: 'left' },
  { key: 'symbol', label: 'Symbol', align: 'left' },
  { key: 'price', label: 'Price', align: 'right' },
  { key: 'change24h', label: '24h Change', align: 'right' },
  { key: 'marketCap', label: 'Market Cap', align: 'right' },
  { key: 'volume', label: 'Volume', align: 'right' },
];

function getSortIcon(order: SortOrder | null) {
  if (!order) return null;
  return order === 'asc' ? (
    <span aria-label="sorted ascending" className="ml-1">▲</span>
  ) : (
    <span aria-label="sorted descending" className="ml-1">▼</span>
  );
}

export const TokenTable: React.FC = () => {
  const [sortKey, setSortKey] = useState<SortKey>('name');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [modalToken, setModalToken] = useState<typeof tokens[0] | null>(null);

  const sortedTokens = [...tokens].sort((a, b) => {
    const aValue = a[sortKey];
    const bValue = b[sortKey];
    if (aValue === bValue) return 0;
    if (sortOrder === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-card">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="bg-gray-50 text-xs uppercase text-gray-500">
            {columns.map((col) => (
              <th
                key={col.key}
                className={`px-4 py-3 font-semibold text-${col.align || 'left'} cursor-pointer select-none`}
                onClick={() => handleSort(col.key)}
                scope="col"
              >
                <span className="inline-flex items-center">
                  {col.label}
                  {col.key === 'change24h' && (
                    <Tooltip text="Price change in the last 24 hours">ℹ️</Tooltip>
                  )}
                  {sortKey === col.key && getSortIcon(sortOrder)}
                </span>
              </th>
            ))}
            <th className="px-4 py-3 text-center font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedTokens.map((token) => (
            <tr key={token.symbol} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
              <td className="px-4 py-3">
                <Popover content={<div><strong>{token.name}</strong><br/>{token.description}</div>}>
                  <TokenInfo logo={token.logo} name={token.name} symbol={token.symbol} />
                </Popover>
              </td>
              <td className="px-4 py-3">{token.symbol}</td>
              <td className="px-4 py-3 text-right font-mono">${token.price.toFixed(2)}</td>
              <td className="px-4 py-3 text-right">
                <PriceChange value={token.change24h} />
              </td>
              <td className="px-4 py-3 text-right">
                <MarketCapCell value={token.marketCap} />
              </td>
              <td className="px-4 py-3 text-right">
                <VolumeCell value={token.volume} />
              </td>
              <td className="px-4 py-3 text-center">
                <ActionButton onClick={() => setModalToken(token)}>Trade</ActionButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        open={!!modalToken}
        onClose={() => setModalToken(null)}
        title={modalToken ? `Trade ${modalToken.name}` : ''}
      >
        {modalToken && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={modalToken.logo} alt={modalToken.name} className="w-8 h-8 rounded-full" />
              <div>
                <div className="font-semibold">{modalToken.name} ({modalToken.symbol})</div>
                <div className="text-sm text-gray-500">Price: ${modalToken.price.toFixed(2)}</div>
              </div>
            </div>
            <div className="text-sm text-gray-700 mb-2">{modalToken.description}</div>
            <div className="bg-gray-100 rounded p-4 text-center text-gray-400">Trading actions coming soon...</div>
          </div>
        )}
      </Modal>
    </div>
  );
}; 