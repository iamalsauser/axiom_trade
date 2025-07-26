"use client"

import { useState, useEffect, useMemo } from 'react'
import { Search, TrendingUp, TrendingDown, Eye, MessageCircle, Users, Volume2, VolumeX, Settings, Star, Bell, User, ChevronDown, Zap, Globe, ChevronUp } from 'lucide-react'
import { TokenTable } from './organisms/token-table'
import { useTokenData } from '../hooks/use-token-data'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Badge } from './ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { cn } from '@/lib/utils'
import type { Token } from '@/types/token'

interface EnhancedToken extends Token {
  category: 'new' | 'final' | 'migrated'
  mcValue: string
  priceValue: string
  txValue: string
  holders: number
  creator: string
  buys: number
  sells: number
  change5m: number
  change1h: number
  change24h: number
}

// Enhanced token data with categories
const enhanceTokenData = (tokens: Token[]): EnhancedToken[] => {
  return tokens.map((token, index) => {
    // Convert age string to number (assuming format like "3600s" or just "3600")
    const ageInSeconds = token.age ? parseInt(token.age.replace('s', '')) : 0
    
    // Categorize tokens based on age and market cap
    let category: 'new' | 'final' | 'migrated' = 'migrated'
    if (ageInSeconds < 3600) { // Less than 1 hour
      category = 'new'
    } else if (ageInSeconds < 86400) { // Less than 24 hours
      category = 'final'
    }

    return {
      ...token,
      category,
      mcValue: formatMarketCap(token.marketCap),
      priceValue: formatPrice(token.price),
      txValue: formatNumber(token.volume24h / 1000, 2) + 'K',
      holders: Math.floor(Math.random() * 100),
      creator: `Creator_${Math.random().toString(36).substr(2, 6)}`,
      buys: Math.floor(token.transactions24h * 0.6),
      sells: Math.floor(token.transactions24h * 0.4),
      change5m: Math.floor(Math.random() * 20) - 10,
      change1h: Math.floor(Math.random() * 30) - 15,
      change24h: token.priceChange24h
    }
  })
}

const formatMarketCap = (mc: number): string => {
  if (mc >= 1000000) return `$${(mc / 1000000).toFixed(1)}M`
  if (mc >= 1000) return `$${(mc / 1000).toFixed(0)}K`
  return `$${mc}`
}

const formatPrice = (price: number): string => {
  if (price >= 1000000) return `$${(price / 1000000).toFixed(0)}M`
  if (price >= 1000) return `$${(price / 1000).toFixed(0)}K`
  return `$${price}`
}

const formatNumber = (num: number, decimals = 0): string => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(num)
}

const TokenCard = ({ token }: { token: EnhancedToken }) => {
  const [currentPrice, setCurrentPrice] = useState(token.price)
  const [priceDirection, setPriceDirection] = useState<'up' | 'down' | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      const change = (Math.random() - 0.5) * 0.05
      const newPrice = Math.max(1, currentPrice * (1 + change))
      
      if (newPrice > currentPrice) {
        setPriceDirection('up')
      } else if (newPrice < currentPrice) {
        setPriceDirection('down')
      }
      
      setCurrentPrice(newPrice)
      
      setTimeout(() => setPriceDirection(null), 500)
    }, 3000 + Math.random() * 4000)

    return () => clearInterval(interval)
  }, [currentPrice])

  const getChangeColor = (change: number): string => {
    if (change > 0) return 'text-green-400'
    if (change < 0) return 'text-red-400'
    return 'text-gray-400'
  }

  const getBadgeColor = (change: number): string => {
    if (change > 0) return 'bg-green-600/20 text-green-400'
    if (change < 0) return 'bg-red-600/20 text-red-400'
    return 'bg-gray-600/20 text-gray-400'
  }

  const getCategoryIcon = (category: string): string => {
    switch (category) {
      case 'new': return '🛡️'
      case 'final': return '🗡️'
      case 'migrated': return '👤'
      default: return '💎'
    }
  }

  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-3 hover:bg-gray-900/70 transition-all hover:border-gray-700 mb-3">
      {/* Header */}
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

      {/* Stats Row */}
      <div className="flex items-center justify-between text-xs mb-2">
        <div className="flex items-center space-x-2">
          <span className="text-gray-400">👥 {token.holders}</span>
          <span className="text-gray-400">📈 {token.buys}</span>
          <span className="text-gray-400">📉 {token.sells}</span>
          <span className="text-gray-400">⚡ {token.transactions24h}</span>
        </div>
      </div>

      {/* Price Info */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-400">MC</div>
            <div className="text-sm font-medium text-white">{token.mcValue}</div>
          </div>
          <div className="text-right">
            <div className={cn("text-sm font-mono transition-colors", 
              priceDirection === 'up' ? 'text-green-400' : 
              priceDirection === 'down' ? 'text-red-400' : 'text-white'
            )}>
              v {token.priceValue}
            </div>
            <div className="text-xs text-gray-400">= {token.txValue}</div>
          </div>
        </div>

        {/* Change Indicators */}
        <div className="grid grid-cols-2 gap-1">
          <span className={cn("px-1.5 py-0.5 rounded text-xs text-center", getBadgeColor(token.change5m))}>
            {token.change5m > 0 ? '+' : ''}{token.change5m}%
          </span>
          <span className={cn("px-1.5 py-0.5 rounded text-xs text-center", getBadgeColor(token.change1h))}>
            {token.change1h > 0 ? '+' : ''}{token.change1h}%
          </span>
          <span className={cn("px-1.5 py-0.5 rounded text-xs text-center", getBadgeColor(token.change24h))}>
            {token.change24h > 0 ? '+' : ''}{token.change24h}%
          </span>
          <span className={cn("px-1.5 py-0.5 rounded text-xs text-center", getBadgeColor(token.priceChange24h))}>
            {token.priceChange24h > 0 ? '+' : ''}{token.priceChange24h}%
          </span>
        </div>

        {/* Creator */}
        <div className="text-xs text-gray-500 pt-1 border-t border-gray-800 truncate">
          {token.creator}
        </div>
      </div>
    </div>
  )
}

const ColumnSection = ({ title, tokens, count, icon: Icon }: { 
  title: string
  tokens: EnhancedToken[]
  count: number
  icon: any
}) => {
  return (
    <div className="flex-1 border-r border-gray-800 last:border-r-0">
      {/* Section Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-900/30 border-b border-gray-700 sticky top-[120px] z-10">
        <div className="flex items-center space-x-2">
          <Zap className="w-4 h-4 text-yellow-400" />
          <h3 className="text-white font-medium text-sm">{title}</h3>
          <span className="bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded text-xs">{count}</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1 text-xs text-gray-400">
            <span className="bg-blue-600 text-white px-1.5 py-0.5 rounded text-xs">P1</span>
            <span>P2</span>
            <span>P3</span>
          </div>
          <ChevronUp className="w-3 h-3 text-gray-400" />
        </div>
      </div>
      
      {/* Token List */}
      <div className="p-3 max-h-[calc(100vh-200px)] overflow-y-auto">
        {tokens.map((token) => (
          <TokenCard key={token.id} token={token} />
        ))}
      </div>
    </div>
  )
}

export function PulseInterface() {
  console.log('PulseInterface component rendering...')
  const { tokens, loading, error } = useTokenData()
  const [searchTerm, setSearchTerm] = useState('')

  console.log('PulseInterface - tokens:', tokens?.length, 'loading:', loading, 'error:', error)

  const enhancedTokens = useMemo(() => {
    return enhanceTokenData(tokens)
  }, [tokens])

  const categorizedTokens = useMemo(() => {
    const filtered = enhancedTokens.filter(token => 
      token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      token.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return {
      new: filtered.filter(token => token.category === 'new'),
      final: filtered.filter(token => token.category === 'final'),
      migrated: filtered.filter(token => token.category === 'migrated')
    }
  }, [enhancedTokens, searchTerm])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading Pulse data...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 mb-4">Error loading Pulse data</p>
          <Button onClick={() => window.location.reload()}>Retry</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Pulse Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 sticky top-0 z-40 bg-gray-950/90 backdrop-blur-sm">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">Pulse</h1>
          <p className="text-gray-400 text-sm">Real-time token tracking and market pulse</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search tokens..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 w-64"
            />
          </div>
          <div className="flex items-center space-x-2 bg-gray-800 rounded-lg px-3 py-2">
            <span className="text-sm text-gray-400">Display</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
          <Volume2 className="w-5 h-5 text-gray-400 cursor-pointer" />
          <VolumeX className="w-5 h-5 text-gray-400 cursor-pointer" />
          <Settings className="w-5 h-5 text-gray-400 cursor-pointer" />
          <div className="flex items-center space-x-2 text-sm">
            <span>1</span>
            <span>=</span>
            <span>0</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="px-6 py-4 border-b border-gray-800">
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-gray-900/50 rounded-lg p-3">
            <div className="text-sm text-gray-400">Total Tokens</div>
            <div className="text-xl font-bold text-white">{enhancedTokens.length}</div>
          </div>
          <div className="bg-gray-900/50 rounded-lg p-3">
            <div className="text-sm text-gray-400">New Pairs</div>
            <div className="text-xl font-bold text-yellow-400">{categorizedTokens.new.length}</div>
          </div>
          <div className="bg-gray-900/50 rounded-lg p-3">
            <div className="text-sm text-gray-400">Final Stretch</div>
            <div className="text-xl font-bold text-orange-400">{categorizedTokens.final.length}</div>
          </div>
          <div className="bg-gray-900/50 rounded-lg p-3">
            <div className="text-sm text-gray-400">Migrated</div>
            <div className="text-xl font-bold text-blue-400">{categorizedTokens.migrated.length}</div>
          </div>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="flex h-[calc(100vh-280px)]">
        <ColumnSection 
          title="New Pairs" 
          tokens={categorizedTokens.new} 
          count={categorizedTokens.new.length}
          icon={TrendingUp}
        />
        
        <ColumnSection 
          title="Final Stretch" 
          tokens={categorizedTokens.final} 
          count={categorizedTokens.final.length}
          icon={TrendingUp}
        />
        
        <ColumnSection 
          title="Migrated" 
          tokens={categorizedTokens.migrated} 
          count={categorizedTokens.migrated.length}
          icon={TrendingUp}
        />
      </div>

      {/* Bottom Status Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 px-6 py-2 flex items-center justify-between text-sm z-50">
        <div className="flex items-center space-x-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded flex items-center space-x-1">
            <Star className="w-3 h-3" />
            <span>PRESET 1</span>
          </span>
          <div className="flex items-center space-x-2">
            <span>1</span>
            <span>=</span>
            <span>0</span>
          </div>
          <span className="text-gray-400">📊 Wallet Tracker</span>
          <span className="text-gray-400">🐦 Twitter Tracker</span>
          <span className="text-gray-400">⚡ Pulse Tracker</span>
          <span className="text-gray-400">📈 PnL Tracker</span>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>🏆 {enhancedTokens.length}</span>
            </div>
            <span className="text-green-400 font-mono">💰 ${(enhancedTokens.reduce((sum, t) => sum + t.volume24h, 0) / 1000).toFixed(2)}K</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Connection is stable</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>GLOBAL</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <Bell className="w-4 h-4 cursor-pointer" />
          <Settings className="w-4 h-4 cursor-pointer" />
          <span>🐦</span>
          <span>📋 Docs</span>
        </div>
      </div>
    </div>
  )
} 