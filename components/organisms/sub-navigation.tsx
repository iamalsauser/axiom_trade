"use client"

import { Filter, Settings, ChevronDown } from "lucide-react"
import { memo, useState } from "react"
import { cn } from "@/lib/utils"
import { FiltersModal } from "./filters-modal"

interface SubNavigationProps {
  timeFilter: string
  onTimeFilterChange: (filter: string) => void
  searchQuery: string
  onSearchChange: (query: string) => void
  activeTab?: string
  onTabChange?: (tab: string) => void
}

export const SubNavigation = memo(function SubNavigation({
  timeFilter,
  onTimeFilterChange,
  activeTab = "discover",
  onTabChange,
}: SubNavigationProps) {
  const timeFilters = ["5m", "1h", "6h", "24h"]
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)

  return (
    <>
      {/* Top thin bar - hidden on mobile */}
      <div className="hidden sm:block w-full h-[28px] bg-[#0a0a0a] border-b border-[#1a1a1a] px-4">
        <div className="flex items-center justify-between h-full max-w-[1470px] mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 border border-[#444444] rounded flex items-center justify-center">
              <span className="text-[#888888] text-xs">★</span>
            </div>
            <div className="text-[#888888] text-xs">⚡</div>
          </div>
          <div className="flex items-center gap-2"></div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="bg-[#0a0a0a] px-3 sm:px-6 py-2 sm:py-3 w-full min-h-[48px] sm:h-[32px]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between h-full max-w-[1420px] mx-auto gap-3 sm:gap-0">
          {/* Left side - Main Navigation */}
          <div className="flex items-center gap-4 sm:gap-8 overflow-x-auto w-full sm:w-auto">
            <button
              className={cn(
                "font-medium text-sm transition-colors whitespace-nowrap",
                activeTab === "discover" ? "text-white" : "text-[#888888] hover:text-white",
              )}
              onClick={() => onTabChange?.("discover")}
            >
              DEX Screener
            </button>
            <button
              className={cn(
                "font-medium text-sm transition-colors whitespace-nowrap",
                activeTab === "trending" ? "text-white" : "text-[#888888] hover:text-white",
              )}
              onClick={() => onTabChange?.("trending")}
            >
              Trending
            </button>
            <button
              className={cn(
                "font-medium text-sm transition-colors whitespace-nowrap",
                activeTab === "pump-live" ? "text-white" : "text-[#888888] hover:text-white",
              )}
              onClick={() => onTabChange?.("pump-live")}
            >
              Pump Live
            </button>
          </div>

          {/* Right side - Controls */}
          <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto w-full sm:w-auto">
            {/* Time Filters */}
            <div className="flex items-center gap-2 sm:gap-3">
              {timeFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => onTimeFilterChange(filter)}
                  className={cn(
                    "text-sm font-medium transition-colors whitespace-nowrap",
                    timeFilter === filter ? "text-[#6366f1]" : "text-[#888888] hover:text-white",
                  )}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Desktop Controls */}
            <div className="hidden sm:flex items-center gap-4">
              {/* Filter Button */}
              <button
                onClick={() => setIsFiltersOpen(true)}
                className="flex items-center gap-2 bg-transparent border border-[#4a4a4a] px-3 py-1.5 rounded-lg text-sm hover:bg-[#2a2a2a] hover:border-[#5a5a5a] transition-all duration-200"
              >
                <Filter className="w-4 h-4 text-[#aaaaaa]" />
                <span className="text-[#aaaaaa]">Filter</span>
                <ChevronDown className="w-3 h-3 text-[#aaaaaa]" />
              </button>

              {/* Settings Icon */}
              <div className="p-1.5 border border-[#4a4a4a] rounded-lg">
                <Settings className="w-4 h-4 text-[#aaaaaa]" />
              </div>

              {/* 1 = 0 */}
              <div className="flex items-center gap-2 bg-transparent border border-[#4a4a4a] px-3 py-1.5 rounded-lg text-sm">
                <span className="text-[#6366f1] font-medium">1</span>
                <span className="text-[#aaaaaa]">=</span>
                <span className="text-white font-medium">0</span>
                <ChevronDown className="w-3 h-3 text-[#aaaaaa]" />
              </div>

              {/* Quick Buy */}
              <div className="text-sm">
                <span className="text-[#888888]">Quick Buy </span>
                <span className="text-white font-medium">0.0</span>
              </div>

              {/* Menu Icon */}
              <div className="text-[#888888] text-sm">≡</div>

              {/* P1 P2 P3 */}
              <div className="flex items-center gap-2 text-sm">
                <span className="text-[#6366f1] font-medium">P1</span>
                <span className="text-[#888888]">P2</span>
                <span className="text-[#888888]">P3</span>
              </div>
            </div>

            {/* Mobile Controls */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={() => setIsFiltersOpen(true)}
                className="p-1.5 border border-[#4a4a4a] rounded-lg hover:bg-[#2a2a2a] hover:border-[#5a5a5a] transition-all duration-200"
              >
                <Filter className="w-4 h-4 text-[#aaaaaa]" />
              </button>
              <div className="p-1.5 border border-[#4a4a4a] rounded-lg">
                <Settings className="w-4 h-4 text-[#aaaaaa]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Modal */}
      <FiltersModal isOpen={isFiltersOpen} onClose={() => setIsFiltersOpen(false)} />
    </>
  )
})
