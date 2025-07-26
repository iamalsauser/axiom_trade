"use client"

import { memo } from "react"
import { cn } from "@/lib/utils"

interface PriceChangeProps {
  change: number
  className?: string
}

export const PriceChange = memo(function PriceChange({ change, className }: PriceChangeProps) {
  const isPositive = change >= 0

  return (
    <div
      className={cn(
        "text-xs font-mono transition-colors duration-300",
        isPositive ? "text-[#00ff88]" : "text-[#ff4444]",
        className,
      )}
    >
      {isPositive ? "+" : ""}
      {change.toFixed(2)}%
    </div>
  )
})
