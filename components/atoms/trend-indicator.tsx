"use client"

import { TrendingUp, TrendingDown, Minus } from "lucide-react"
import { memo } from "react"

interface TrendIndicatorProps {
  value: number
  previousValue?: number
}

export const TrendIndicator = memo(function TrendIndicator({
  value,
  previousValue = value * 0.95,
}: TrendIndicatorProps) {
  const trend = value > previousValue ? "up" : value < previousValue ? "down" : "neutral"

  const icons = {
    up: <TrendingUp className="w-3 h-3 text-[#00ff88]" />,
    down: <TrendingDown className="w-3 h-3 text-[#ff4444]" />,
    neutral: <Minus className="w-3 h-3 text-[#888888]" />,
  }

  return icons[trend]
})
