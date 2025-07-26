"use client"

import { TableHead } from "@/components/ui/table"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import type { SortConfig } from "@/types/token"
import { ChevronDown, ChevronUp } from "lucide-react"
import { memo } from "react"
import { cn } from "@/lib/utils"

interface TableHeaderComponentProps {
  title: string
  sortKey: string
  sortConfig: SortConfig
  onSort: (key: string) => void
  tooltip: string
  className?: string
}

export const TableHeaderComponent = memo(function TableHeaderComponent({
  title,
  sortKey,
  sortConfig,
  onSort,
  tooltip,
  className,
}: TableHeaderComponentProps) {
  const isActive = sortConfig.key === sortKey
  const isAsc = isActive && sortConfig.direction === "asc"

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <TableHead
            className={cn(
              "text-[#888888] font-semibold cursor-pointer hover:text-white transition-colors select-none",
              className,
            )}
            onClick={() => onSort(sortKey)}
          >
            <div className="flex items-center gap-1">
              {title}
              <div className="flex flex-col">
                <ChevronUp
                  className={cn("w-3 h-3 transition-colors", isActive && isAsc ? "text-white" : "text-[#444444]")}
                />
                <ChevronDown
                  className={cn(
                    "w-3 h-3 -mt-1 transition-colors",
                    isActive && !isAsc ? "text-white" : "text-[#444444]",
                  )}
                />
              </div>
            </div>
          </TableHead>
        </TooltipTrigger>
        <TooltipContent className="bg-[#2a2a2a] border-[#444444] text-white">
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
})
