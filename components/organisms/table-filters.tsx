"use client"

import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"
import { memo } from "react"

interface TableFiltersProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  selectedChain: string
  onChainChange: (chain: string) => void
}

export const TableFilters = memo(function TableFilters({
  searchQuery,
  onSearchChange,
  selectedChain,
  onChainChange,
}: TableFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#888888] w-4 h-4" />
        <Input
          placeholder="Search tokens..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 bg-[#1a1a1a] border-[#2a2a2a] text-white placeholder:text-[#888888]"
        />
      </div>
      <Select value={selectedChain} onValueChange={onChainChange}>
        <SelectTrigger className="w-full sm:w-48 bg-[#1a1a1a] border-[#2a2a2a] text-white">
          <SelectValue placeholder="Select chain" />
        </SelectTrigger>
        <SelectContent className="bg-[#1a1a1a] border-[#2a2a2a]">
          <SelectItem value="all">All Chains</SelectItem>
          <SelectItem value="ethereum">Ethereum</SelectItem>
          <SelectItem value="bsc">BSC</SelectItem>
          <SelectItem value="polygon">Polygon</SelectItem>
          <SelectItem value="arbitrum">Arbitrum</SelectItem>
          <SelectItem value="solana">Solana</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
})
