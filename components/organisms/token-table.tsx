"use client"

import type React from "react"
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { TableRowComponent } from "./table-row"
import type { Token, SortConfig } from "@/types/token"
import { useState, useMemo, memo } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { TrendingUp, ArrowUp, ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface TokenTableProps {
  tokens: Token[]
  loading: boolean
  error: string | null
}

export const TokenTable = memo(function TokenTable({ tokens, loading, error }: TokenTableProps) {
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: "marketCap",
    direction: "desc",
  })

  const handleSort = (key: string) => {
    setSortConfig((prevConfig) => ({
      key,
      direction: prevConfig.key === key && prevConfig.direction === "desc" ? "asc" : "desc",
    }))
  }

  const sortedTokens = useMemo(() => {
    if (!sortConfig.key) return tokens

    return [...tokens].sort((a, b) => {
      const aValue = a[sortConfig.key as keyof Token]
      const bValue = b[sortConfig.key as keyof Token]

      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortConfig.direction === "asc" ? aValue - bValue : bValue - aValue
      }

      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortConfig.direction === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue)
      }

      return 0
    })
  }, [tokens, sortConfig])

  const SortableHeader = ({
    children,
    sortKey,
    className = "",
    width,
  }: {
    children: React.ReactNode
    sortKey: string
    className?: string
    width: string
  }) => {
    const isActive = sortConfig.key === sortKey
    const isAsc = isActive && sortConfig.direction === "asc"

    return (
      <TableHead
        className={cn(
          "text-[#888888] font-medium text-sm py-3 px-4 cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2 focus:ring-offset-[#0a0a0a]",
          className,
        )}
        style={{ width, minWidth: width, maxWidth: width }}
        onClick={() => handleSort(sortKey)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            handleSort(sortKey)
          }
        }}
        tabIndex={0}
        role="columnheader"
        aria-sort={isActive ? (isAsc ? "ascending" : "descending") : "none"}
        aria-label={`Sort by ${sortKey} ${isActive ? (isAsc ? "descending" : "ascending") : ""}`}
      >
        <div className="flex items-center gap-1">
          {children}
          {isActive ? (
            isAsc ? (
              <ArrowUp className="w-3 h-3 text-[#888888]" aria-hidden="true" />
            ) : (
              <ArrowDown className="w-3 h-3 text-[#888888]" aria-hidden="true" />
            )
          ) : null}
        </div>
      </TableHead>
    )
  }

  if (error) {
    return (
      <div className="bg-[#0a0a0a] rounded-lg p-8 text-center" role="alert" aria-live="polite">
        <p className="text-red-400">Error loading tokens: {error}</p>
      </div>
    )
  }

  return (
    <div className="table-critical bg-[#0a0a0a] w-full h-full">
      <div className="h-full overflow-y-auto" role="region" aria-label="Token trading data">
        <Table className="w-full border-separate border-spacing-0">
          <TableHeader className="sticky top-0 bg-[#0a0a0a] z-10 border-b border-[#2a2a2a]">
            <TableRow className="border-[#1a1a1a] hover:bg-transparent" style={{ height: "48px" }}>
              <SortableHeader sortKey="symbol" className="text-left pl-4" width="300px">
                Pair Info
              </SortableHeader>
              <SortableHeader sortKey="marketCap" className="text-right pr-4" width="140px">
                Market Cap
              </SortableHeader>
              <SortableHeader sortKey="liquidity" className="text-right pr-4 hidden sm:table-cell" width="140px">
                Liquidity
              </SortableHeader>
              <SortableHeader sortKey="volume24h" className="text-right pr-4" width="140px">
                Volume
              </SortableHeader>
              <SortableHeader sortKey="transactions24h" className="text-right pr-4 hidden lg:table-cell" width="140px">
                <div className="flex items-center justify-end gap-1">
                  TXNS
                  <TrendingUp className="w-3 h-3" aria-hidden="true" />
                </div>
              </SortableHeader>
              <SortableHeader sortKey="auditScore" className="text-center hidden lg:table-cell" width="140px">
                Audit Log
              </SortableHeader>
              <TableHead
                className="text-[#888888] font-medium text-sm py-3 px-4 text-center"
                style={{ width: "120px", minWidth: "120px", maxWidth: "120px" }}
                role="columnheader"
              >
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading
              ? Array.from({ length: 7 }).map((_, index) => (
                  <TableRow
                    key={`skeleton-${index}`}
                    className="border-b border-[#2a2a2a] hover:bg-[#0f0f0f]"
                    style={{ height: "88px" }}
                  >
                    <td className="py-2 pl-4" style={{ width: "300px", minWidth: "300px", maxWidth: "300px" }}>
                      <div className="flex items-center gap-3">
                        <Skeleton className="w-12 h-12 rounded-lg bg-[#1a1a1a]" />
                        <div>
                          <Skeleton className="w-20 h-4 mb-1 bg-[#1a1a1a]" />
                          <Skeleton className="w-16 h-3 bg-[#1a1a1a]" />
                        </div>
                      </div>
                    </td>
                    <td
                      className="py-2 pr-4 text-right"
                      style={{ width: "140px", minWidth: "140px", maxWidth: "140px" }}
                    >
                      <Skeleton className="w-16 h-4 bg-[#1a1a1a] ml-auto" />
                    </td>
                    <td
                      className="py-2 pr-4 text-right hidden sm:table-cell"
                      style={{ width: "140px", minWidth: "140px", maxWidth: "140px" }}
                    >
                      <Skeleton className="w-16 h-4 bg-[#1a1a1a] ml-auto" />
                    </td>
                    <td
                      className="py-2 pr-4 text-right"
                      style={{ width: "140px", minWidth: "140px", maxWidth: "140px" }}
                    >
                      <Skeleton className="w-16 h-4 bg-[#1a1a1a] ml-auto" />
                    </td>
                    <td
                      className="py-2 pr-4 text-right hidden lg:table-cell"
                      style={{ width: "140px", minWidth: "140px", maxWidth: "140px" }}
                    >
                      <Skeleton className="w-16 h-4 bg-[#1a1a1a] ml-auto" />
                    </td>
                    <td
                      className="py-2 text-center hidden lg:table-cell"
                      style={{ width: "140px", minWidth: "140px", maxWidth: "140px" }}
                    >
                      <Skeleton className="w-16 h-4 bg-[#1a1a1a] mx-auto" />
                    </td>
                    <td
                      className="py-2 px-4 text-center"
                      style={{ width: "120px", minWidth: "120px", maxWidth: "120px" }}
                    >
                      <Skeleton className="w-16 h-4 bg-[#1a1a1a] mx-auto" />
                    </td>
                  </TableRow>
                ))
              : sortedTokens.map((token) => <TableRowComponent key={token.id} token={token} />)}
          </TableBody>
        </Table>
      </div>
    </div>
  )
})
