"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { X, RotateCcw } from "lucide-react"
import { memo, useState } from "react"
import { cn } from "@/lib/utils"

interface FiltersModalProps {
  isOpen: boolean
  onClose: () => void
}

interface ProtocolTag {
  id: string
  name: string
  color: string
  selected: boolean
}

const protocolTags: ProtocolTag[] = [
  { id: "pump", name: "🚀 Pump", color: "bg-green-600", selected: false },
  { id: "launchlab", name: "⚪ LaunchLab", color: "bg-blue-600", selected: false },
  { id: "bonk", name: "🟠 Bonk", color: "bg-orange-600", selected: false },
  { id: "dynamic-bc", name: "🔴 Dynamic BC", color: "bg-red-600", selected: false },
  { id: "launch-coin", name: "🟢 Launch a Coin", color: "bg-green-600", selected: false },
  { id: "boop", name: "🔵 Boop", color: "bg-blue-600", selected: false },
  { id: "moonit", name: "🟡 Moonit", color: "bg-yellow-600", selected: false },
  { id: "raydium", name: "🔵 Raydium", color: "bg-blue-600", selected: false },
  { id: "pump-amm", name: "⚫ Pump AMM", color: "bg-gray-800", selected: false },
  { id: "meteora-amm", name: "🔴 Meteora AMM", color: "bg-red-600", selected: false },
  { id: "meteora-amm-v2", name: "🔴 Meteora AMM V2", color: "bg-red-600", selected: false },
]

export const FiltersModal = memo(function FiltersModal({ isOpen, onClose }: FiltersModalProps) {
  const [activeTab, setActiveTab] = useState("audit")
  const [protocols, setProtocols] = useState(protocolTags)
  const [searchKeywords, setSearchKeywords] = useState("")
  const [excludeKeywords, setExcludeKeywords] = useState("")
  const [dexPaid, setDexPaid] = useState(false)
  const [filters, setFilters] = useState({
    topHoldersMin: "",
    topHoldersMax: "",
    insiderHoldingMin: "",
    insiderHoldingMax: "",
    bundlersMin: "",
    bundlersMax: "",
    devHoldingsMin: "",
    devHoldingsMax: "",
  })

  const toggleProtocol = (id: string) => {
    setProtocols((prev) =>
      prev.map((protocol) => (protocol.id === id ? { ...protocol, selected: !protocol.selected } : protocol)),
    )
  }

  const resetFilters = () => {
    setProtocols(protocolTags.map((p) => ({ ...p, selected: false })))
    setSearchKeywords("")
    setExcludeKeywords("")
    setDexPaid(false)
    setFilters({
      topHoldersMin: "",
      topHoldersMax: "",
      insiderHoldingMin: "",
      insiderHoldingMax: "",
      bundlersMin: "",
      bundlersMax: "",
      devHoldingsMin: "",
      devHoldingsMax: "",
    })
  }

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#1a1a1a] border-[#2a2a2a] text-white max-w-md w-full p-0 gap-0">
        {/* Header */}
        <DialogHeader className="flex flex-row items-center justify-between p-4 border-b border-[#2a2a2a]">
          <DialogTitle className="text-white font-semibold">Filters</DialogTitle>
          
        </DialogHeader>

        {/* Content */}
        <div className="p-4 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Protocols Section */}
          <div>
            <h3 className="text-white font-medium mb-3">Protocols</h3>
            <div className="flex flex-wrap gap-2">
              {protocols.map((protocol) => (
                <button
                  key={protocol.id}
                  onClick={() => toggleProtocol(protocol.id)}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 border backdrop-blur-sm text-white",
                    protocol.selected
                      ? `${protocol.color} border-transparent shadow-lg shadow-current/25`
                      : "bg-black/20 border-white/10 hover:bg-white/5 hover:border-white/20 hover:shadow-lg hover:shadow-white/10 hover:scale-105",
                  )}
                >
                  {protocol.name}
                </button>
              ))}
            </div>
          </div>

          {/* Search Keywords */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[#888888] text-sm mb-2 block">Search Keywords</label>
              <Input
                placeholder="keyword1, keyword2..."
                value={searchKeywords}
                onChange={(e) => setSearchKeywords(e.target.value)}
                className="bg-[#2a2a2a] border-[#3a3a3a] text-white placeholder:text-[#666666]"
              />
            </div>
            <div>
              <label className="text-[#888888] text-sm mb-2 block">Exclude Keywords</label>
              <Input
                placeholder="keyword1, keyword2..."
                value={excludeKeywords}
                onChange={(e) => setExcludeKeywords(e.target.value)}
                className="bg-[#2a2a2a] border-[#3a3a3a] text-white placeholder:text-[#666666]"
              />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-[#2a2a2a]">
            <button
              onClick={() => setActiveTab("audit")}
              className={cn(
                "px-4 py-2 text-sm font-medium border-b-2 transition-colors",
                activeTab === "audit"
                  ? "text-white border-[#6366f1]"
                  : "text-[#888888] border-transparent hover:text-white",
              )}
            >
              Audit
            </button>
            <button
              onClick={() => setActiveTab("metrics")}
              className={cn(
                "px-4 py-2 text-sm font-medium border-b-2 transition-colors",
                activeTab === "metrics"
                  ? "text-white border-[#6366f1]"
                  : "text-[#888888] border-transparent hover:text-white",
              )}
            >
              Metrics
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "audit" && (
            <div className="space-y-4">
              {/* Dex Paid Checkbox */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="dex-paid"
                  checked={dexPaid}
                  onCheckedChange={setDexPaid}
                  className="border-[#3a3a3a] data-[state=checked]:bg-[#6366f1] data-[state=checked]:border-[#6366f1]"
                />
                <label htmlFor="dex-paid" className="text-white text-sm font-medium">
                  Dex Paid
                </label>
              </div>

              {/* Filter Ranges */}
              <div className="space-y-4">
                <div>
                  <label className="text-[#888888] text-sm mb-2 block">Top 10 Holders %</label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input
                      placeholder="Min"
                      value={filters.topHoldersMin}
                      onChange={(e) => handleFilterChange("topHoldersMin", e.target.value)}
                      className="bg-[#2a2a2a] border-[#3a3a3a] text-white placeholder:text-[#666666]"
                    />
                    <Input
                      placeholder="Max"
                      value={filters.topHoldersMax}
                      onChange={(e) => handleFilterChange("topHoldersMax", e.target.value)}
                      className="bg-[#2a2a2a] border-[#3a3a3a] text-white placeholder:text-[#666666]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[#888888] text-sm mb-2 block">Insider Holding %</label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input
                      placeholder="Min"
                      value={filters.insiderHoldingMin}
                      onChange={(e) => handleFilterChange("insiderHoldingMin", e.target.value)}
                      className="bg-[#2a2a2a] border-[#3a3a3a] text-white placeholder:text-[#666666]"
                    />
                    <Input
                      placeholder="Max"
                      value={filters.insiderHoldingMax}
                      onChange={(e) => handleFilterChange("insiderHoldingMax", e.target.value)}
                      className="bg-[#2a2a2a] border-[#3a3a3a] text-white placeholder:text-[#666666]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[#888888] text-sm mb-2 block">Bundlers %</label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input
                      placeholder="Min"
                      value={filters.bundlersMin}
                      onChange={(e) => handleFilterChange("bundlersMin", e.target.value)}
                      className="bg-[#2a2a2a] border-[#3a3a3a] text-white placeholder:text-[#666666]"
                    />
                    <Input
                      placeholder="Max"
                      value={filters.bundlersMax}
                      onChange={(e) => handleFilterChange("bundlersMax", e.target.value)}
                      className="bg-[#2a2a2a] border-[#3a3a3a] text-white placeholder:text-[#666666]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[#888888] text-sm mb-2 block">Dev Holdings %</label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input
                      placeholder="Min"
                      value={filters.devHoldingsMin}
                      onChange={(e) => handleFilterChange("devHoldingsMin", e.target.value)}
                      className="bg-[#2a2a2a] border-[#3a3a3a] text-white placeholder:text-[#666666]"
                    />
                    <Input
                      placeholder="Max"
                      value={filters.devHoldingsMax}
                      onChange={(e) => handleFilterChange("devHoldingsMax", e.target.value)}
                      className="bg-[#2a2a2a] border-[#3a3a3a] text-white placeholder:text-[#666666]"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "metrics" && (
            <div className="space-y-4">
              <p className="text-[#888888] text-sm">Metrics filters will be available here.</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-4 border-t border-[#2a2a2a]">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="bg-transparent border-[#3a3a3a] text-[#888888] hover:bg-[#2a2a2a] hover:text-white"
            >
              Import
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-transparent border-[#3a3a3a] text-[#888888] hover:bg-[#2a2a2a] hover:text-white"
            >
              Export
            </Button>
          </div>
          <Button onClick={onClose} className="bg-[#6366f1] hover:bg-[#5855eb] text-white font-medium px-6">
            Apply All
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
})
