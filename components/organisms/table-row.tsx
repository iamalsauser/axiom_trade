"use client"

import { TableCell, TableRow } from "@/components/ui/table"
import { TokenInfo } from "@/components/molecules/token-info"
import { MarketCapCell } from "@/components/molecules/market-cap-cell"
import { VolumeCell } from "@/components/molecules/volume-cell"
import { ActionButton } from "@/components/molecules/action-button"
import { AuditCell } from "@/components/molecules/audit-cell"
import { TransactionCell } from "@/components/molecules/transaction-cell"
import type { Token } from "@/types/token"
import { memo } from "react"
import { formatNumber } from "@/lib/utils"

interface TableRowComponentProps {
  token: Token
}

export const TableRowComponent = memo(function TableRowComponent({ token }: TableRowComponentProps) {
  return (
    <TableRow className="border-b border-[#2a2a2a] hover:bg-[#0f0f0f] transition-colors h-[88px]">
      {/* Column 1: Pair Info - 300px */}
      <TableCell className="py-2 pl-4" style={{ width: "300px", minWidth: "300px", maxWidth: "300px" }}>
        <TokenInfo token={token} />
      </TableCell>

      {/* Column 2: Market Cap - 140px */}
      <TableCell className="py-2 pr-4 text-right" style={{ width: "140px", minWidth: "140px", maxWidth: "140px" }}>
        <MarketCapCell marketCap={token.marketCap} change={token.priceChange24h} />
      </TableCell>

      {/* Column 3: Liquidity - 140px - Hidden on mobile */}
      <TableCell
        className="py-2 pr-4 text-right hidden sm:table-cell"
        style={{ width: "140px", minWidth: "140px", maxWidth: "140px" }}
      >
        <div className="font-mono text-sm text-white">${formatNumber(token.liquidity)}</div>
      </TableCell>

      {/* Column 4: Volume - 140px */}
      <TableCell className="py-2 pr-4 text-right" style={{ width: "140px", minWidth: "140px", maxWidth: "140px" }}>
        <VolumeCell volume={token.volume24h} />
      </TableCell>

      {/* Column 5: TXNS - 140px - Hidden on mobile and tablet */}
      <TableCell
        className="py-2 pr-4 text-right hidden lg:table-cell"
        style={{ width: "140px", minWidth: "140px", maxWidth: "140px" }}
      >
        <TransactionCell
          transactions={token.transactions24h}
          buyTransactions={token.buyTransactions}
          sellTransactions={token.sellTransactions}
        />
      </TableCell>

      {/* Column 6: Audit Log - 140px - Hidden on mobile and tablet */}
      <TableCell
        className="py-2 text-center hidden lg:table-cell"
        style={{ width: "140px", minWidth: "140px", maxWidth: "140px" }}
      >
        <AuditCell score={token.auditScore} percentage={token.auditPercentage} paid={token.auditPaid} />
      </TableCell>

      {/* Column 7: Action - 120px */}
      <TableCell className="py-2 px-4 text-center" style={{ width: "120px", minWidth: "120px", maxWidth: "120px" }}>
        <ActionButton />
      </TableCell>
    </TableRow>
  )
})
