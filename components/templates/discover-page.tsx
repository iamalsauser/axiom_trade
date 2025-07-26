"use client"

import { Header } from "@/components/organisms/header"
import { SubNavigation } from "@/components/organisms/sub-navigation"
import { TokenTable } from "@/components/organisms/token-table"
import { useTokenData } from "@/hooks/use-token-data"
import { useState } from "react"
import { Footer } from "@/components/organisms/footer"

interface DiscoverPageProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export function DiscoverPage({ activeTab, onTabChange }: DiscoverPageProps) {
  const [timeFilter, setTimeFilter] = useState("1h")
  const [searchQuery, setSearchQuery] = useState("")
  const { tokens, loading, error, priceUpdates } = useTokenData()

  const filteredTokens = tokens.filter((token) => {
    const matchesSearch =
      token.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      token.symbol.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSearch
  })

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
      <div className="flex-1 flex justify-center px-6 py-4 pb-12 overflow-hidden" style={{ marginTop: "140px" }}>
        <div className="w-full max-w-[1400px] bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg overflow-hidden">
          <TokenTable tokens={filteredTokens} loading={loading} error={error} />
        </div>
      </div>

      {/* Footer - Fixed at bottom with grey border */}
      <Footer />
    </div>
  )
}
