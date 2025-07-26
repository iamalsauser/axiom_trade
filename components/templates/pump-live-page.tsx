"use client"

import { Header } from "@/components/organisms/header"
import { SubNavigation } from "@/components/organisms/sub-navigation"
import { useState } from "react"
import { Footer } from "@/components/organisms/footer"
import { MessageCircle, Zap, Link, Globe, User } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PumpLivePageProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

interface PumpToken {
  id: string
  name: string
  symbol: string
  image: string
  description: string
  marketCap: string
  comments: number
  timeAgo: string
  creator: string
  creatorAvatar: string
  hasImage: boolean
  badgeText?: string
  badgeColor?: string
}

const mockPumpTokens: PumpToken[] = [
  {
    id: "1",
    name: "Reindeer",
    symbol: "REINDEER",
    image: "/placeholder.svg?height=240&width=349&text=Cartoon+Bear",
    description: "",
    marketCap: "3.99K",
    comments: 0,
    timeAgo: "3m ago",
    creator: "Anonymous",
    creatorAvatar: "/placeholder.svg?height=24&width=24",
    hasImage: true,
    badgeText: "🦌",
    badgeColor: "bg-orange-500",
  },
  {
    id: "2",
    name: "WE HAVE A WE...",
    symbol: "WEDDING",
    image: "/placeholder.svg?height=240&width=349&text=Wedding+Crowd",
    description: "WE HAVE A WEDDING",
    marketCap: "4.77K",
    comments: 0,
    timeAgo: "6m ago",
    creator: "Anonymous",
    creatorAvatar: "/placeholder.svg?height=24&width=24",
    hasImage: true,
    badgeText: "💒",
    badgeColor: "bg-pink-500",
  },
  {
    id: "3",
    name: "Frogg Solana...",
    symbol: "FROGG",
    image: "/placeholder.svg?height=240&width=349&text=Blonde+Woman",
    description:
      "The Lil' Frogg Making Solana pumpfun Great Again. Once upon a time, in a swamp full of basic frogs, one lil' Frogg...",
    marketCap: "5.32K",
    comments: 0,
    timeAgo: "10m ago",
    creator: "Anonymous",
    creatorAvatar: "/placeholder.svg?height=24&width=24",
    hasImage: true,
    badgeText: "🐸",
    badgeColor: "bg-green-500",
  },
  {
    id: "4",
    name: "saying god u...",
    symbol: "GOD",
    image: "/placeholder.svg?height=240&width=349&text=Long+Hair+Man",
    description: "saying god until he shows up and makes it all happen. no rug pull 🙏",
    marketCap: "4.85K",
    comments: 0,
    timeAgo: "17m ago",
    creator: "Anonymous",
    creatorAvatar: "/placeholder.svg?height=24&width=24",
    hasImage: true,
    badgeText: "?",
    badgeColor: "bg-gray-600",
  },
  {
    id: "5",
    name: "Saying Daddy...",
    symbol: "DADDY",
    image: "",
    description: 'I am saying "Daddy" 1 MILLION times, live 24/7 will not leave',
    marketCap: "3.66K",
    comments: 0,
    timeAgo: "",
    creator: "Anonymous",
    creatorAvatar: "/placeholder.svg?height=24&width=24",
    hasImage: false,
    badgeText: "$1M",
    badgeColor: "bg-green-500",
  },
  {
    id: "6",
    name: "LIVE STREAM ...",
    symbol: "LIVE",
    image: "",
    description: "",
    marketCap: "3.66K",
    comments: 0,
    timeAgo: "",
    creator: "Anonymous",
    creatorAvatar: "/placeholder.svg?height=24&width=24",
    hasImage: false,
    badgeText: "📺",
    badgeColor: "bg-red-500",
  },
  {
    id: "7",
    name: "Pepe cash",
    symbol: "PEPE",
    image: "",
    description: "It's cheap, it's fun, and it's going to the moon—don't miss",
    marketCap: "3.67K",
    comments: 0,
    timeAgo: "",
    creator: "Anonymous",
    creatorAvatar: "/placeholder.svg?height=24&width=24",
    hasImage: false,
    badgeText: "🐸",
    badgeColor: "bg-green-500",
  },
  {
    id: "8",
    name: "Saying GoodB...",
    symbol: "GOOD",
    image: "",
    description: 'I am saying "GoodBoy" 1 MILLION times, live 24/7 will not',
    marketCap: "3.66K",
    comments: 0,
    timeAgo: "",
    creator: "Anonymous",
    creatorAvatar: "/placeholder.svg?height=24&width=24",
    hasImage: false,
    badgeText: "$1M",
    badgeColor: "bg-green-500",
  },
]

export function PumpLivePage({ activeTab, onTabChange }: PumpLivePageProps) {
  const [timeFilter, setTimeFilter] = useState("1h")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="h-screen bg-[#0a0a0a] text-white flex flex-col overflow-hidden">
      {/* Header/Navbar - Fixed at top */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      {/* Sub Navigation Bar - Fixed below header */}
      <div className="fixed top-[64px] left-0 right-0 z-40">
        <SubNavigation
          timeFilter={timeFilter}
          onTimeFilterChange={setTimeFilter}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeTab={activeTab}
          onTabChange={onTabChange}
        />
      </div>

      {/* Main Content Area - With proper top margin to account for fixed headers */}
      <div className="flex-1 flex justify-center px-6 py-4 overflow-hidden" style={{ marginTop: "140px" }}>
        <div className="w-full max-w-[1400px] bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg p-4 overflow-y-auto">
          {/* Token Cards Grid */}
          <div className="grid grid-cols-4 gap-4 auto-rows-max">
            {mockPumpTokens.map((token) => (
              <div
                key={token.id}
                className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-[#3a3a3a] hover:border-[#4a4a4a] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 cursor-pointer"
                style={{ width: "349px", height: "363px" }}
              >
                {/* Token Image/Video Area */}
                <div className="h-[240px] bg-[#0a0a0a] relative overflow-hidden">
                  {token.hasImage && token.image ? (
                    <img
                      src={token.image || "/placeholder.svg"}
                      alt={token.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#1a1a1a] border border-[#2a2a2a] rounded-t-lg">
                      <div className="w-12 h-12 text-[#444444]">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                          <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                {/* Token Info Section */}
                <div className="p-4 h-[123px] flex flex-col">
                  {/* Header with creator info */}
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className={`w-6 h-6 ${token.badgeColor || "bg-green-500"} rounded flex items-center justify-center text-white text-xs font-bold`}
                    >
                      {token.badgeText || "$1M"}
                    </div>
                    <span className="text-white font-semibold text-sm flex-1 truncate">{token.name}</span>
                    <div className="text-right">
                      <span className="text-[#888888] text-xs">MC </span>
                      <span className="text-[#6366f1] text-sm font-mono">{token.marketCap}</span>
                    </div>
                  </div>

                  {/* Description */}
                  {token.description && (
                    <p className="text-[#888888] text-sm mb-3 line-clamp-2 flex-1">{token.description}</p>
                  )}

                  {/* Bottom section with engagement and actions */}
                  <div className="flex items-center justify-between mt-auto">
                    {/* Engagement Stats */}
                    <div className="flex items-center gap-4 text-[#888888] text-sm">
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{token.comments}</span>
                      </div>
                      {token.timeAgo && <span>• {token.timeAgo}</span>}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-[#888888] hover:text-white p-2 bg-transparent hover:bg-[#2a2a2a] w-8 h-8 rounded-full"
                      >
                        <Link className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-[#888888] hover:text-white p-2 bg-transparent hover:bg-[#2a2a2a] w-8 h-8 rounded-full"
                      >
                        <User className="w-4 h-4" />
                      </Button>
                      {token.hasImage && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-[#888888] hover:text-white p-2 bg-transparent hover:bg-[#2a2a2a] w-8 h-8 rounded-full"
                        >
                          <Globe className="w-4 h-4" />
                        </Button>
                      )}
                      <Button size="sm" className="bg-[#6366f1] hover:bg-[#5855eb] text-white rounded-full w-8 h-8 p-0">
                        <Zap className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer - Fixed at bottom with grey border */}
      <Footer />
    </div>
  )
}
