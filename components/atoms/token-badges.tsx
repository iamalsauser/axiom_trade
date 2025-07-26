"use client"

import { memo } from "react"
import { Users, Globe, MessageSquare, Search } from "lucide-react"

interface TokenBadgesProps {
  badges?: string[]
}

export const TokenBadges = memo(function TokenBadges({ badges = [] }: TokenBadgesProps) {
  return (
    <div className="flex items-center gap-1">
      {badges.includes("telegram") && (
        <div className="w-4 h-4 text-[#888888]">
          <Users className="w-3 h-3" />
        </div>
      )}
      {badges.includes("website") && (
        <div className="w-4 h-4 text-[#888888]">
          <Globe className="w-3 h-3" />
        </div>
      )}
      {badges.includes("twitter") && (
        <div className="w-4 h-4 text-[#888888]">
          <MessageSquare className="w-3 h-3" />
        </div>
      )}
      {badges.includes("dexscreener") && (
        <div className="w-4 h-4 text-[#888888]">
          <Search className="w-3 h-3" />
        </div>
      )}
    </div>
  )
})
