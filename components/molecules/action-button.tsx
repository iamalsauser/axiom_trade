"use client"

import { Button } from "@/components/ui/button"
import { memo } from "react"

export const ActionButton = memo(function ActionButton() {
  return (
    <Button
      size="sm"
      className="bg-[#6366f1] hover:bg-[#5855eb] text-white font-medium rounded-lg w-full max-w-[100px] h-[32px] text-xs sm:text-sm"
    >
      <span className="hidden sm:inline">Buy</span>
      <span className="sm:hidden">+</span>
    </Button>
  )
})
