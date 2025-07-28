"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  Search,
  TrendingUp,
  Users,
  ChevronUp,
  Zap,
  BarChart3,
  Globe,
  MessageCircle,
} from "lucide-react";
import TokenCard from "./TokenCard";
import NewPairsTokenCard from "./NewPairsTokenCard";
import { motion, AnimatePresence } from "framer-motion";

// --- Mock Tokens Data ---
const mockTokens = [
  {
    id: 1,
    name: "Nebula",
    symbol: "NEB",
    age: "16",
    marketCap: 5000,
    price: 2000,
    volume24h: 7000,
    transactions24h: 7,
    priceChange24h: -5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Quantum",
    symbol: "QTM",
    age: "8",
    marketCap: 5000,
    price: 0,
    volume24h: 0,
    transactions24h: 0,
    priceChange24h: 7,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Aurora",
    symbol: "AUR",
    age: "14",
    marketCap: 5000,
    price: 134,
    volume24h: 11000,
    transactions24h: 11,
    priceChange24h: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/100px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
  },
  {
    id: 4,
    name: "Solstice",
    symbol: "SOL",
    age: "14",
    marketCap: 5000,
    price: 1,
    volume24h: 4000,
    transactions24h: 4,
    priceChange24h: 0,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
 
];

// --- Interfaces ---
interface Token {
  id: number;
  name: string;
  symbol: string;
  age: string;
  marketCap: number;
  price: number;
  volume24h: number;
  transactions24h: number;
  priceChange24h: number;
  image: string;
}

interface EnhancedToken extends Token {
  category: "new" | "final" | "migrated";
  mcValue: string;
  priceValue: string;
  txValue: string;
  holders: number;
  creator: string;
  buys: number;
  sells: number;
  change5m: number;
  change1h: number;
  change24h: number;
}

// --- Helper Functions ---
const formatMarketCap = (mc: number): string => {
  if (mc >= 1000000) return `$${(mc / 1000000).toFixed(1)}M`;
  if (mc >= 1000) return `$${(mc / 1000).toFixed(0)}K`;
  return `$${mc}`;
};

const formatPrice = (price: number): string => {
  if (price >= 1000000) return `$${(price / 1000000).toFixed(0)}M`;
  if (price >= 1000) return `$${(price / 1000).toFixed(0)}K`;
  return `$${price}`;
};

const formatNumber = (num: number, decimals = 0): string => {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(num);
};

// --- Enhance and Expand Token Data ---
const enhanceTokenData = (tokens: Token[]): EnhancedToken[] => {
  // Create multiple copies of tokens to demonstrate independent scrolling
  const expandedTokens: Token[] = [];
  for (let i = 0; i < 8; i++) {
    expandedTokens.push(...tokens.map(token => ({
      ...token,
      id: token.id + (i * 100),
      name: `${token.name}_${i + 1}`,
      symbol: `${token.symbol}_${i + 1}`
    })));
  }

  return expandedTokens.map((token, index) => {
    // Categorize tokens based on age and market cap - distribute more evenly
    let category: 'new' | 'final' | 'migrated' = 'migrated';
    const categoryIndex = index % 3;
    if (categoryIndex === 0) {
      category = 'new';
    } else if (categoryIndex === 1) {
      category = 'final';
    } else {
      category = 'migrated';
    }

    // Use deterministic values for server-side rendering to prevent hydration mismatch
    const deterministicSeed = token.id + index;
    const holders = (deterministicSeed * 7) % 100;
    const creator = `Creator_${(deterministicSeed * 13) % 100000}`;
    const buys = Math.floor(token.transactions24h * 0.6);
    const sells = Math.floor(token.transactions24h * 0.4);
    const change5m = ((deterministicSeed * 3) % 20) - 10;
    const change1h = ((deterministicSeed * 5) % 30) - 15;
    const change24h = token.priceChange24h + ((deterministicSeed * 2) % 10) - 5;

    return {
      ...token,
      category,
      mcValue: formatMarketCap(token.marketCap),
      priceValue: formatPrice(token.price),
      txValue: formatNumber(token.volume24h / 1000, 2) + 'K',
      holders,
      creator,
      buys,
      sells,
      change5m,
      change1h,
      change24h
    };
  });
};

// --- OldTokenCard Component (unchanged) ---
const OldTokenCard: React.FC<{ token: EnhancedToken }> = ({ token }) => {
  const [currentPrice, setCurrentPrice] = useState(token.price);
  const [priceDirection, setPriceDirection] = useState<'up' | 'down' | null>(null);

  useEffect(() => {
    let price = token.price;
    const interval = setInterval(() => {
      const change = (Math.random() - 0.5) * 0.05;
      const newPrice = Math.max(1, price * (1 + change));
      if (newPrice > price) {
        setPriceDirection('up');
      } else if (newPrice < price) {
        setPriceDirection('down');
      }
      setCurrentPrice(newPrice);
      price = newPrice;
      setTimeout(() => setPriceDirection(null), 500);
    }, 10000 + Math.random() * 5000); // 10–15 seconds
    return () => clearInterval(interval);
  }, [token.price]);

  const getBadgeColor = (change: number): string => {
    if (change > 0) return 'bg-green-600/20 text-green-400';
    if (change < 0) return 'bg-red-600/20 text-red-400';
    return 'bg-gray-600/20 text-gray-400';
  };

  const getCategoryIcon = (category: string): string => {
    switch (category) {
      case 'new': return '🛡️';
      case 'final': return '🗡️';
      case 'migrated': return '👤';
      default: return '💎';
    }
  };

  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-3 hover:bg-gray-900/70 transition-all hover:border-gray-700 mb-3">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center space-x-2">
          <div className="text-xl">{getCategoryIcon(token.category)}</div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center space-x-1">
              <span className="text-white font-medium text-sm truncate">{token.name}</span>
              <span className="text-gray-400 text-xs truncate">{token.symbol}</span>
              {token.category === 'new' && (
                <span className="bg-yellow-600/20 text-yellow-400 px-1 py-0.5 rounded text-xs">●</span>
              )}
            </div>
            <div className="text-xs text-gray-500">{token.age}s</div>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <Users className="w-3 h-3 text-gray-500" />
          <Globe className="w-3 h-3 text-gray-500" />
          <MessageCircle className="w-3 h-3 text-gray-500" />
          <Search className="w-3 h-3 text-gray-500" />
        </div>
      </div>
      <div className="flex items-center justify-between text-xs mb-2">
        <div className="flex items-center space-x-2">
          <span className="text-gray-400">👥 {token.holders}</span>
          <span className="text-gray-400">📈 {token.buys}</span>
          <span className="text-gray-400">📉 {token.sells}</span>
          <span className="text-gray-400">⚡ {token.transactions24h}</span>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-400">MC</div>
            <div className="text-sm font-medium text-white">{token.mcValue}</div>
          </div>
          <div className="text-right">
            <div className={`text-sm font-mono transition-colors ${
              priceDirection === 'up' ? 'text-green-400' :
              priceDirection === 'down' ? 'text-red-400' : 'text-white'
            }`}>
              v {token.priceValue}
            </div>
            <div className="text-xs text-gray-400">= {token.txValue}</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1">
          <span className={`px-1.5 py-0.5 rounded text-xs text-center ${getBadgeColor(token.change5m)}`}>
            {token.change5m > 0 ? '+' : ''}{token.change5m}%
          </span>
          <span className={`px-1.5 py-0.5 rounded text-xs text-center ${getBadgeColor(token.change1h)}`}>
            {token.change1h > 0 ? '+' : ''}{token.change1h}%
          </span>
          <span className={`px-1.5 py-0.5 rounded text-xs text-center ${getBadgeColor(token.change24h)}`}>
            {token.change24h > 0 ? '+' : ''}{token.change24h}%
          </span>
          <span className={`px-1.5 py-0.5 rounded text-xs text-center ${getBadgeColor(token.priceChange24h)}`}>
            {token.priceChange24h > 0 ? '+' : ''}{token.priceChange24h}%
          </span>
        </div>
        <div className="text-xs text-gray-500 pt-1 border-t border-gray-800 truncate">
          {token.creator}
        </div>
      </div>
    </div>
  );
};

// --- ColumnSection Component ---
interface ColumnSectionProps {
  title: string;
  tokens: EnhancedToken[];
  count: number;
  isNewPairs?: boolean;
}

const ColumnSection: React.FC<ColumnSectionProps> = ({
  title,
  tokens,
  count,
  isNewPairs = false,
}) => {
  return (
    <div className="flex-1 h-full flex flex-col overflow-hidden" style={{backgroundColor: '#101114'}}>
      {/* Column Header - Responsive */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#2A2A2A] flex-shrink-0" style={{backgroundColor: '#101114'}}>
        <div className="flex items-center space-x-2">
          <span className="text-white font-medium text-sm">{title}</span>
        </div>
        
        <div className="flex items-center space-x-3">
          {/* Lightning bolt icon */}
          <Zap className="w-4 h-4 text-[#F59E0B]" />
          
          {/* Count */}
          <span className="text-[#9CA3AF] text-sm">{count}</span>
          
          {/* Menu icon */}
          <BarChart3 className="w-4 h-4 text-[#9CA3AF]" />
          
          {/* P1 P2 P3 buttons */}
          <div className="flex items-center space-x-1">
            <span className="bg-[#3B82F6] text-white px-2 py-1 rounded text-xs font-medium">P1</span>
            <span className="text-[#9CA3AF] px-1 py-1 text-xs">P2</span>
            <span className="text-[#9CA3AF] px-1 py-1 text-xs">P3</span>
          </div>
          
          {/* Sort icon */}
          <ChevronUp className="w-4 h-4 text-[#9CA3AF]" />
        </div>
      </div>
      
      {/* Token List - Responsive content that expands to fill space */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden" style={{
        scrollbarWidth: 'thin',
        scrollbarColor: '#4B5563 #101114'
      }}>
        <div className="p-4 space-y-3 h-full" style={{
          minHeight: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <AnimatePresence>
            {tokens.map((token) => (
              <motion.div
                key={token.id}
                layout
                style={{
                  minHeight: '120px',
                  maxHeight: '200px',
                  marginBottom: '30px'
                }}
              >
                {isNewPairs ? 
                  <NewPairsTokenCard token={{
                    id: token.id.toString(),
                    name: token.name,
                    symbol: token.symbol,
                    age: token.age,
                    marketCap: token.marketCap.toString(),
                    price: token.price.toString(),
                    volume24h: token.volume24h.toString(),
                    transactions24h: token.transactions24h.toString(),
                    priceChange24h: token.priceChange24h.toString(),
                    image: token.image,
                    holders: token.holders.toString(),
                    buys: token.buys.toString(),
                    sells: token.sells.toString(),
                    creator: token.creator
                  }} /> :
                  <TokenCard token={{
                    id: token.id.toString(),
                    name: token.name,
                    symbol: token.symbol,
                    age: token.age,
                    marketCap: token.marketCap.toString(),
                    price: token.price.toString(),
                    volume24h: token.volume24h.toString(),
                    transactions24h: token.transactions24h.toString(),
                    priceChange24h: token.priceChange24h.toString(),
                    image: token.image,
                    holders: token.holders.toString(),
                    buys: token.buys.toString(),
                    sells: token.sells.toString(),
                    creator: token.creator
                  }} />
                }
              </motion.div>
            ))}
          </AnimatePresence>
          {tokens.length === 0 && (
            <div className="text-center py-8 text-[#9CA3AF] flex-1 flex items-center justify-center">
              No tokens in this category
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Main Component ---
const Main: React.FC = () => {
  const [searchTerm] = useState('');
  const enhancedTokens = useMemo(() => enhanceTokenData(mockTokens), []);
  const categorizedTokens = useMemo(() => {
    const filtered = enhancedTokens.filter(token =>
      token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      token.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // Sort by price descending for each category
    const sortByPriceDesc = (arr: EnhancedToken[]) => [...arr].sort((a, b) => b.price - a.price);
    return {
      new: sortByPriceDesc(filtered.filter(token => token.category === 'new')),
      final: sortByPriceDesc(filtered.filter(token => token.category === 'final')),
      migrated: sortByPriceDesc(filtered.filter(token => token.category === 'migrated'))
    };
  }, [enhancedTokens, searchTerm]);
  
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center">
      
      {/* Card-like Frame for Columns - FIT ENTIRE VIEWPORT */}
      <div className="flex justify-center w-full overflow-hidden" style={{
        marginBottom: '20px',
        marginTop: '0px',
        position: 'relative'
      }}>
        <div
          className="rounded-2xl shadow-2xl border border-[#1A1A1A] flex overflow-hidden"
          style={{ 
            width: 'calc(100vw - 48px)', // 24px margin on each side
            height: 'calc(100vh - 214px)', // 214px from bottom
            position: 'relative', 
            zIndex: 10,
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            backgroundColor: '#101114'
          }}
        >
          {/* Frame structure that fits entire viewport */}
          <div className="flex-1 h-full overflow-y-auto" style={{borderRight: '1px solid rgb(34,36,45)'}}>
            <ColumnSection
              title="New Pairs"
              tokens={categorizedTokens.new}
              count={categorizedTokens.new.length}
              isNewPairs={true}
            />
          </div>
          <div className="flex-1 h-full overflow-y-auto" style={{borderRight: '1px solid rgb(34,36,45)'}}>
            <ColumnSection
              title="Final Stretch"
              tokens={categorizedTokens.final}
              count={categorizedTokens.final.length}
              isNewPairs={true}
            />
          </div>
          <div className="flex-1 h-full overflow-y-auto">
            <ColumnSection
              title="Migrated"
              tokens={categorizedTokens.migrated}
              count={categorizedTokens.migrated.length}
              isNewPairs={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
    