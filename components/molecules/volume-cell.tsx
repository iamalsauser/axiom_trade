"use client"

import { formatNumber } from "@/lib/utils"
import { memo } from "react"

interface VolumeCellProps {
  volume: number
}

export const VolumeCell = memo(function VolumeCell({ volume }: VolumeCellProps) {
  return (
    <div className="text-right w-full">
      <div className="font-mono text-sm text-white">${formatNumber(volume)}</div>
    </div>
  )
})
