"use client"

import { memo } from "react"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"

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
  const buyPercentage = transactions > 0 ? (buyCount / transactions) * 100 : 0

  return (
    <div className="text-right w-full group">
      <div className="font-mono text-sm text-white group-hover:text-gray-200 transition-colors">
        {transactions}
      </div>
      <div className="text-xs space-y-1">
        <div className="flex items-center justify-end gap-1">
          <ArrowUpRight className="w-3 h-3 text-[#00ff88]" />
          <span className="text-[#00ff88] font-medium">{buyCount}</span>
          <span className="text-[#888888]">/</span>
          <ArrowDownRight className="w-3 h-3 text-[#ff4444]" />
          <span className="text-[#ff4444] font-medium">{sellCount}</span>
        </div>
        <div className="w-full bg-[#2a2a2a] rounded-full h-1 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-[#00ff88] to-[#6366f1] h-full rounded-full transition-all duration-300"
            style={{ width: `${buyPercentage}%` }}
          />
        </div>
      </div>
    </div>
  )
})
