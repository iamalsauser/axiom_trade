"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import type { Token } from "@/types/token"
import { MoreHorizontal, TrendingUp, Heart, Share2, Info } from "lucide-react"
import { memo } from "react"

interface ActionMenuProps {
  token: Token
}

export const ActionMenu = memo(function ActionMenu({ token }: ActionMenuProps) {
  return (
    <div className="flex items-center gap-2">
      <Button size="sm" className="bg-[#00ff88] hover:bg-[#00dd77] text-black font-semibold">
        Trade
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="text-[#888888] hover:text-white">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-[#1a1a1a] border-[#2a2a2a]" align="end">
          <DropdownMenuItem className="text-white hover:bg-[#2a2a2a]">
            <TrendingUp className="w-4 h-4 mr-2" />
            View Chart
          </DropdownMenuItem>
          <DropdownMenuItem className="text-white hover:bg-[#2a2a2a]">
            <Heart className="w-4 h-4 mr-2" />
            Add to Favorites
          </DropdownMenuItem>
          <DropdownMenuItem className="text-white hover:bg-[#2a2a2a]">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </DropdownMenuItem>
          <DropdownMenuItem className="text-white hover:bg-[#2a2a2a]">
            <Info className="w-4 h-4 mr-2" />
            Token Info
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
})
