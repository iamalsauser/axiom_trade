"use client"

import { memo } from "react"

interface TransactionCellProps {
  transactions: number
  buyTransactions?: number
  sellTransactions?: number
}

export const TransactionCell = memo(function TransactionCell({
  transactions,
  buyTransactions,
  sellTransactions,
}: TransactionCellProps) {
  const buyCount = buyTransactions || Math.floor(transactions * 0.6)
  const sellCount = sellTransactions || transactions - buyCount

  return (
    <div className="text-right w-full">
      <div className="font-mono text-sm text-white">{transactions}</div>
      <div className="text-xs">
        <span className="text-[#00ff88]">{buyCount}</span>
        <span className="text-[#888888]"> / </span>
        <span className="text-[#ff4444]">{sellCount}</span>
      </div>
    </div>
  )
})
