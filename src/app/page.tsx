"use client"

import { TokenTable } from '../../components/organisms/token-table';
import { useTokenData } from '../../hooks/use-token-data';
import Link from 'next/link';

export default function HomePage() {
  const { tokens, loading, error } = useTokenData();

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header Navigation */}
      <header className="border-b border-[#2a2a2a] bg-[#0a0a0a] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Navigation */}
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-white font-bold text-xl">Axiom</span>
              </div>
              
              <nav className="hidden md:flex items-center gap-6">
                <Link href="/" className="text-white font-medium">Discover</Link>
                <Link href="/pulse" className="text-[#888888] hover:text-white transition-colors">Pulse</Link>
                <a href="#" className="text-[#888888] hover:text-white transition-colors">Trackers</a>
                <a href="#" className="text-[#888888] hover:text-white transition-colors">Perpetuals</a>
                <a href="#" className="text-[#888888] hover:text-white transition-colors">Yield</a>
              </nav>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2">
                <span className="text-[#888888] text-sm">SOL</span>
                <span className="text-[#888888] text-sm">ETH</span>
              </div>
              <button className="px-4 py-2 border border-[#2a2a2a] text-[#888888] hover:bg-[#1a1a1a] rounded-lg transition-colors">
                Disconnected
              </button>
            </div>
          </div>
        </div>
      </header>

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
    </div>
  );
} 