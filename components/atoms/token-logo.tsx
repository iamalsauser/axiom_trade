"use client"

import { memo, useState } from "react"
import Image from "next/image"

interface TokenLogoProps {
  src: string
  alt: string
  chain: string
}

interface SimilarToken {
  id: string
  name: string
  symbol: string
  logo: string
  timeframe: string
  value: string
}

const mockSimilarTokens: SimilarToken[] = [
  {
    id: "1",
    name: "GorReward",
    symbol: "GOR",
    logo: "/images/dove-token.png",
    timeframe: "1d",
    value: "3.8K",
  },
  {
    id: "2",
    name: "GorReward",
    symbol: "GOR",
    logo: "/images/bc-token.png",
    timeframe: "1d",
    value: "3.8K",
  },
]

export const TokenLogo = memo(function TokenLogo({ src, alt, chain }: TokenLogoProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      aria-label={`${alt} token information`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          setIsHovered(!isHovered)
        }
      }}
    >
      <div className="w-12 h-12 rounded-lg overflow-hidden bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center cursor-pointer hover-scale">
        {!imageError ? (
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            width={48}
            height={48}
            className="w-full h-full object-cover"
            priority={false}
            loading="lazy"
            onError={handleImageError}
            sizes="48px"
            quality={85}
          />
        ) : (
          <div className="w-8 h-8 text-[#444444] flex items-center justify-center" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
            </svg>
          </div>
        )}
      </div>
      <div
        className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-orange-500 border-2 border-[#0a0a0a] flex items-center justify-center"
        aria-label="Warning indicator"
      >
        <span className="text-white text-xs font-bold" aria-hidden="true">
          !
        </span>
      </div>

      {/* Hover Overlay - Optimized for performance */}
      {isHovered && (
        <div
          className="absolute left-0 top-16 z-50 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-4 shadow-2xl min-w-[300px]"
          role="tooltip"
          aria-label="Token details"
        >
          {/* Large Token Image */}
          <div className="w-full h-[200px] rounded-lg overflow-hidden bg-[#0a0a0a] border border-[#2a2a2a] mb-4">
            <Image
              src={src || "/placeholder.svg"}
              alt={`Large view of ${alt}`}
              width={300}
              height={200}
              className="w-full h-full object-cover"
              loading="lazy"
              sizes="300px"
              quality={85}
            />
          </div>

          {/* Similar Tokens Section */}
          <div>
            <h3 className="text-[#888888] text-sm font-medium mb-3">Similar Tokens</h3>
            <div className="space-y-2" role="list">
              {mockSimilarTokens.map((token) => (
                <div
                  key={token.id}
                  className="flex items-center justify-between p-2 hover:bg-[#2a2a2a] rounded transition-colors"
                  role="listitem"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded overflow-hidden bg-[#2a2a2a] border border-[#3a3a3a]">
                      <Image
                        src={token.logo || "/placeholder.svg"}
                        alt={`${token.name} logo`}
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        sizes="32px"
                        quality={75}
                      />
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">{token.name}</div>
                      <div className="text-[#888888] text-xs">TX: {token.timeframe}</div>
                    </div>
                  </div>
                  <div className="text-[#6366f1] text-sm font-medium">{token.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
})
