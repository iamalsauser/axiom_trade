"use client"

import { TokenTable } from '../../components/organisms/token-table';
import { useTokenData } from '../../hooks/use-token-data';

export default function HomePage() {
  const { tokens, loading, error } = useTokenData();

  return (
    <section className="py-8 px-4 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2 animate-fade-in">
          Token Discovery Table
        </h1>
        <p className="text-[#888888] text-sm animate-fade-in animation-delay-200">
          Discover and trade the latest tokens with real-time data and advanced analytics
        </p>
      </div>
      
      <div className="bg-[#0a0a0a] rounded-lg border border-[#2a2a2a] overflow-hidden shadow-2xl">
        <TokenTable tokens={tokens} loading={loading} error={error} />
      </div>
    </section>
  );
} 