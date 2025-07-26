"use client"

import { TokenLogo } from "@/components/atoms/token-logo"
import { TokenBadges } from "@/components/atoms/token-badges"
import type { Token } from "@/types/token"
import { memo } from "react"

interface TokenInfoProps {
  token: Token
}

export const TokenInfo = memo(function TokenInfo({ token }: TokenInfoProps) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
      <TokenLogo src={token.logo} alt={token.name} chain={token.chain} />
      <div className="flex flex-col min-w-0 flex-1">
        <div className="flex items-center gap-1 sm:gap-2">
          <span className="font-semibold text-white text-sm truncate">{token.symbol}</span>
          <span className="text-[#888888] text-sm truncate hidden sm:inline">{token.name}</span>
          <div className="w-3 h-3 bg-[#888888] rounded-sm flex-shrink-0"></div>
        </div>
        <div className="flex items-center gap-1 mt-1">
          <span className="text-[#888888] text-xs">{token.age || "4mo"}</span>
          <TokenBadges badges={token.badges} />
        </div>
      </div>
    </div>
  )
})
