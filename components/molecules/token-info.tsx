"use client"

import { TokenLogo } from "@/components/atoms/token-logo"
import { TokenBadges } from "@/components/atoms/token-badges"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import type { Token } from "@/types/token"
import { memo } from "react"
import { formatNumber } from "@/lib/utils"
import { ExternalLink, Calendar, TrendingUp, TrendingDown } from "lucide-react"

interface TokenInfoProps {
  token: Token
}

export const TokenInfo = memo(function TokenInfo({ token }: TokenInfoProps) {
  const isPriceUp = token.priceChange24h > 0

  return (
    <TooltipProvider>
      <Popover>
        <PopoverTrigger asChild>
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 cursor-pointer hover:opacity-80 transition-opacity">
            <TokenLogo src={token.logo} alt={token.name} chain={token.chain} />
            <div className="flex flex-col min-w-0 flex-1">
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="font-semibold text-white text-sm truncate">{token.symbol}</span>
                <span className="text-[#888888] text-sm truncate hidden sm:inline">{token.name}</span>
                <div className="w-3 h-3 bg-[#888888] rounded-sm flex-shrink-0"></div>
              </div>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-[#888888] text-xs">{token.age || "4mo"}</span>
                <TokenBadges badges={token.badges} />
              </div>
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-80 bg-[#1a1a1a] border-[#2a2a2a] text-white p-4">
          <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-lg overflow-hidden bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center">
                <TokenLogo src={token.logo} alt={token.name} chain={token.chain} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{token.symbol}</h3>
                <p className="text-[#888888] text-sm">{token.name}</p>
              </div>
            </div>

            {/* Price Info */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[#888888]">Current Price</span>
                <span className="font-mono text-white">${token.price.toFixed(8)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#888888]">24h Change</span>
                <div className={`flex items-center gap-1 ${isPriceUp ? 'text-green-400' : 'text-red-400'}`}>
                  {isPriceUp ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  <span className="font-mono">{token.priceChange24h > 0 ? '+' : ''}{token.priceChange24h.toFixed(2)}%</span>
                </div>
              </div>
            </div>

            {/* Market Data */}
            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-[#2a2a2a]">
              <div>
                <span className="text-[#888888] text-sm">Market Cap</span>
                <p className="font-mono text-white">${formatNumber(token.marketCap)}</p>
              </div>
              <div>
                <span className="text-[#888888] text-sm">Volume 24h</span>
                <p className="font-mono text-white">${formatNumber(token.volume24h)}</p>
              </div>
              <div>
                <span className="text-[#888888] text-sm">Liquidity</span>
                <p className="font-mono text-white">${formatNumber(token.liquidity)}</p>
              </div>
              <div>
                <span className="text-[#888888] text-sm">Transactions</span>
                <p className="font-mono text-white">{token.transactions24h}</p>
              </div>
            </div>

            {/* Audit Info */}
            <div className="pt-2 border-t border-[#2a2a2a]">
              <div className="flex justify-between items-center">
                <span className="text-[#888888] text-sm">Audit Score</span>
                <span className="font-mono text-white">{token.auditScore}/100</span>
              </div>
              <div className="w-full bg-[#2a2a2a] rounded-full h-2 mt-1">
                <div 
                  className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full" 
                  style={{ width: `${token.auditScore}%` }}
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 pt-2 border-t border-[#2a2a2a]">
              <button className="flex-1 bg-[#6366f1] hover:bg-[#5855eb] text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors">
                Buy Now
              </button>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="p-2 bg-[#2a2a2a] hover:bg-[#3a3a3a] rounded-lg transition-colors">
                    <ExternalLink className="w-4 h-4 text-[#888888]" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View on DexScreener</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </TooltipProvider>
  )
})
