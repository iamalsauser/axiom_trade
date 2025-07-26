"use client"

import { formatNumber } from "@/lib/utils"
import { memo } from "react"
import { cn } from "@/lib/utils"

interface MarketCapCellProps {
  marketCap: number
  change: number
}

export const MarketCapCell = memo(function MarketCapCell({ marketCap, change }: MarketCapCellProps) {
  const isPositive = change >= 0

  return (
    <div className="text-right w-full">
      <div className="font-mono text-sm text-white">${formatNumber(marketCap)}</div>
      <div
        className={cn(
          "text-xs font-mono transition-colors duration-300",
          isPositive ? "text-[#00ff88]" : "text-[#ff4444]",
        )}
      >
        {isPositive ? "+" : ""}
        {change.toFixed(2)}%
      </div>
    </div>
  )
})
