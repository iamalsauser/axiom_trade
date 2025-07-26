import React, { useState } from 'react';
import { Header } from '../organisms/header';
import { Footer } from '../organisms/footer';
import { SubNavigation } from '../organisms/sub-navigation';
import { TokenTable } from '../organisms/token-table';

// Example token data (replace with real data/fetching in production)
const pumpTokens = [
  {
    id: '3',
    name: 'Hashtag',
    symbol: 'HASH',
    logo: '/images/hashtag-token.png',
    price: 0.98,
    change24h: 12.3,
    marketCap: 50000000,
    volume: 9000000,
    transactions: 800,
    auditScore: 90,
    auditStatus: 'verified',
    lastAuditDate: '2024-06-02',
    badges: ['trending', 'hot']
  },
  {
    id: '4',
    name: 'BC Token',
    symbol: 'BCT',
    logo: '/images/bc-token.png',
    price: 2.15,
    change24h: 8.7,
    marketCap: 120000000,
    volume: 15000000,
    transactions: 1500,
    auditScore: 88,
    auditStatus: 'verified',
    lastAuditDate: '2024-05-30',
    badges: ['hot']
  },
  // ...more tokens
];

export const PumpLivePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('trending');

  // Filter tokens by tab (for demo, just return all)
  const filteredTokens = pumpTokens; // Add real filtering logic as needed

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <SubNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">
        <TokenTable tokens={filteredTokens} />
      </main>
      <Footer />
    </div>
  );
}; 