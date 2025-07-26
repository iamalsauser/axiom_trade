"use client"

import { memo } from "react"
import { Shield, CheckCircle, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface AuditCellProps {
  score: number
  percentage?: number
  paid?: boolean
}

export const AuditCell = memo(function AuditCell({ score, percentage, paid = true }: AuditCellProps) {
  const displayPercentage = percentage || (score > 80 ? 89.97 : score > 60 ? 31.18 : 16.2)
  const isHighScore = score >= 80
  const isMediumScore = score >= 60 && score < 80

  return (
    <div className="text-center group">
      <div className="flex items-center justify-center gap-1 mb-1">
        {isHighScore ? (
          <Shield className="w-3 h-3 text-[#00ff88]" />
        ) : isMediumScore ? (
          <AlertCircle className="w-3 h-3 text-yellow-400" />
        ) : (
          <AlertCircle className="w-3 h-3 text-[#ff4444]" />
        )}
        <span className={cn(
          "text-sm font-mono",
          isHighScore ? "text-[#00ff88]" : isMediumScore ? "text-yellow-400" : "text-[#ff4444]"
        )}>
          {displayPercentage.toFixed(2)}%
        </span>
      </div>
      
      <div className="w-full bg-[#2a2a2a] rounded-full h-1.5 mb-1 overflow-hidden">
        <div 
          className={cn(
            "h-full rounded-full transition-all duration-300",
            isHighScore ? "bg-gradient-to-r from-[#00ff88] to-green-400" :
            isMediumScore ? "bg-gradient-to-r from-yellow-400 to-orange-400" :
            "bg-gradient-to-r from-[#ff4444] to-red-500"
          )}
          style={{ width: `${displayPercentage}%` }}
        />
      </div>
      
      <div className="text-xs space-y-0.5">
        <div className="text-[#888888]">Score: {score}/100</div>
        {paid && (
          <div className="flex items-center justify-center gap-1 text-[#00ff88]">
            <CheckCircle className="w-3 h-3" />
            <span>Paid</span>
          </div>
        )}
      </div>
    </div>
  )
})
