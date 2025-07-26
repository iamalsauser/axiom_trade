"use client"

import { formatNumber } from "@/lib/utils"
import { memo } from "react"
import { cn } from "@/lib/utils"
import { TrendingUp, TrendingDown } from "lucide-react"

interface MarketCapCellProps {
  marketCap: number
  change: number
}

export const MarketCapCell = memo(function MarketCapCell({ marketCap, change }: MarketCapCellProps) {
  const isPositive = change >= 0

  return (
    <div className="text-right w-full group">
      <div className="font-mono text-sm text-white group-hover:text-gray-200 transition-colors">
        ${formatNumber(marketCap)}
      </div>
      <div
        className={cn(
          "text-xs font-mono transition-all duration-300 flex items-center justify-end gap-1 group-hover:scale-105",
          isPositive ? "text-[#00ff88]" : "text-[#ff4444]",
        )}
      >
        {isPositive ? (
          <TrendingUp className="w-3 h-3" />
        ) : (
          <TrendingDown className="w-3 h-3" />
        )}
        <span>
          {isPositive ? "+" : ""}
          {change.toFixed(2)}%
        </span>
      </div>
    </div>
  )
})
