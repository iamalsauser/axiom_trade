"use client"

import { useState } from 'react'
import { Search, TrendingUp, TrendingDown, Activity, Shield, Users, BarChart3 } from 'lucide-react'
import { TokenTable } from '../../../components/organisms/token-table'
import { useTokenData } from '../../../hooks/use-token-data'
import { Button } from '../../../components/ui/button'
import { Input } from '../../../components/ui/input'
import { Badge } from '../../../components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs'

export default function PulsePage() {
  const { tokens, loading, error } = useTokenData()
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState('all')

  const filteredTokens = tokens.filter(token =>
    token.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
    token.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const stats = {
    totalTokens: tokens.length,
    gainers: tokens.filter(t => t.priceChange24h > 0).length,
    losers: tokens.filter(t => t.priceChange24h < 0).length,
    totalVolume: tokens.reduce((sum, t) => sum + t.volume24h, 0)
  }

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
                <a href="/" className="text-[#888888] hover:text-white transition-colors">Discover</a>
                <a href="/pulse" className="text-white font-medium">Pulse</a>
                <a href="#" className="text-[#888888] hover:text-white transition-colors">Trackers</a>
                <a href="#" className="text-[#888888] hover:text-white transition-colors">Perpetuals</a>
                <a href="#" className="text-[#888888] hover:text-white transition-colors">Yield</a>
              </nav>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#888888] w-4 h-4" />
                <Input
                  placeholder="Search by token or CA..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-[#1a1a1a] border-[#2a2a2a] text-white placeholder:text-[#666666] focus:border-[#6366f1]"
                />
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2">
                <Badge variant="outline" className="border-[#2a2a2a] text-[#888888]">
                  SOL
                </Badge>
                <Badge variant="outline" className="border-[#2a2a2a] text-[#888888]">
                  ETH
                </Badge>
              </div>
              <Button variant="outline" className="border-[#2a2a2a] text-[#888888] hover:bg-[#1a1a1a]">
                Disconnected
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Pulse</h1>
          <p className="text-[#888888] text-sm">
            Real-time token tracking and market pulse
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#6366f1]/20 rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5 text-[#6366f1]" />
              </div>
              <div>
                <p className="text-[#888888] text-sm">Total Tokens</p>
                <p className="text-white font-bold text-lg">{stats.totalTokens}</p>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="text-[#888888] text-sm">Gainers</p>
                <p className="text-green-400 font-bold text-lg">{stats.gainers}</p>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                <TrendingDown className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <p className="text-[#888888] text-sm">Losers</p>
                <p className="text-red-400 font-bold text-lg">{stats.losers}</p>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-[#888888] text-sm">Total Volume</p>
                <p className="text-white font-bold text-lg">${(stats.totalVolume / 1000000).toFixed(1)}M</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-[#1a1a1a] border border-[#2a2a2a]">
            <TabsTrigger value="all" className="data-[state=active]:bg-[#6366f1] data-[state=active]:text-white">
              All Tokens
            </TabsTrigger>
            <TabsTrigger value="gainers" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">
              Gainers
            </TabsTrigger>
            <TabsTrigger value="losers" className="data-[state=active]:bg-red-500 data-[state=active]:text-white">
              Losers
            </TabsTrigger>
            <TabsTrigger value="trending" className="data-[state=active]:bg-[#6366f1] data-[state=active]:text-white">
              Trending
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="bg-[#0a0a0a] rounded-lg border border-[#2a2a2a] overflow-hidden shadow-2xl">
              <TokenTable tokens={filteredTokens} loading={loading} error={error} />
            </div>
          </TabsContent>

          <TabsContent value="gainers" className="mt-6">
            <div className="bg-[#0a0a0a] rounded-lg border border-[#2a2a2a] overflow-hidden shadow-2xl">
              <TokenTable 
                tokens={filteredTokens.filter(t => t.priceChange24h > 0)} 
                loading={loading} 
                error={error} 
              />
            </div>
          </TabsContent>

          <TabsContent value="losers" className="mt-6">
            <div className="bg-[#0a0a0a] rounded-lg border border-[#2a2a2a] overflow-hidden shadow-2xl">
              <TokenTable 
                tokens={filteredTokens.filter(t => t.priceChange24h < 0)} 
                loading={loading} 
                error={error} 
              />
            </div>
          </TabsContent>

          <TabsContent value="trending" className="mt-6">
            <div className="bg-[#0a0a0a] rounded-lg border border-[#2a2a2a] overflow-hidden shadow-2xl">
              <TokenTable 
                tokens={filteredTokens.filter(t => t.volume24h > 10000)} 
                loading={loading} 
                error={error} 
              />
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
} 