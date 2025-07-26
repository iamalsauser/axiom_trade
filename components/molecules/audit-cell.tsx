"use client"

import { memo } from "react"

interface AuditCellProps {
  score: number
  percentage?: number
  paid?: boolean
}

export const AuditCell = memo(function AuditCell({ score, percentage, paid = true }: AuditCellProps) {
  const displayPercentage = percentage || (score > 80 ? 89.97 : score > 60 ? 31.18 : 16.2)

  return (
    <div className="text-center">
      <div className="text-[#ff4444] text-sm font-mono">{displayPercentage.toFixed(2)}%</div>
      <div className="text-[#00ff88] text-xs">100%</div>
      {paid && <div className="text-[#00ff88] text-xs">Paid</div>}
    </div>
  )
})
