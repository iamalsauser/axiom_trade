import React, { useState } from 'react';
import { Header } from '../organisms/header';
import { Footer } from '../organisms/footer';
import { SubNavigation } from '../organisms/sub-navigation';
import { TokenTable } from '../organisms/token-table';

// Example token data (replace with real data/fetching in production)
const exampleTokens = [
  {
    id: '1',
    name: 'Axiom',
    symbol: 'AXIOM',
    logo: '/images/axiom-logo.png',
    price: 1.23,
    change24h: 2.5,
    marketCap: 1500000000,
    volume: 12000000,
    transactions: 1200,
    auditScore: 95,
    auditStatus: 'verified',
    lastAuditDate: '2024-06-01',
    badges: ['verified', 'trending']
  },
  {
    id: '2',
    name: 'Dove',
    symbol: 'DOVE',
    logo: '/images/dove-token.png',
    price: 0.45,
    change24h: -1.2,
    marketCap: 80000000,
    volume: 3500000,
    transactions: 400,
    auditScore: 80,
    auditStatus: 'pending',
    lastAuditDate: '2024-05-28',
    badges: ['new']
  },
  // ...more tokens
];

export const DiscoverPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  // Filter tokens by tab (for demo, just return all)
  const filteredTokens = exampleTokens; // Add real filtering logic as needed

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