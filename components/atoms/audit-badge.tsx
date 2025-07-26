"use client"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { memo } from "react"
import { cn } from "@/lib/utils"

interface AuditBadgeProps {
  score: number
}

export const AuditBadge = memo(function AuditBadge({ score }: AuditBadgeProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "bg-[#00ff88] text-black"
    if (score >= 60) return "bg-yellow-500 text-black"
    return "bg-[#ff4444] text-white"
  }

  const getScoreLabel = (score: number) => {
    if (score >= 80) return "High"
    if (score >= 60) return "Medium"
    return "Low"
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className={cn(
              "inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold cursor-help",
              getScoreColor(score),
            )}
          >
            {getScoreLabel(score)}
          </div>
        </TooltipTrigger>
        <TooltipContent className="bg-[#2a2a2a] border-[#444444] text-white">
          <p>Audit Score: {score}/100</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
})
