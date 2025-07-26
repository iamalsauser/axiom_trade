"use client"

import { formatNumber } from "@/lib/utils"
import { memo } from "react"
import { Activity } from "lucide-react"

interface VolumeCellProps {
  volume: number
}

export const VolumeCell = memo(function VolumeCell({ volume }: VolumeCellProps) {
  return (
    <div className="text-right w-full group">
      <div className="font-mono text-sm text-white group-hover:text-gray-200 transition-colors flex items-center justify-end gap-1">
        <Activity className="w-3 h-3 text-[#6366f1] opacity-0 group-hover:opacity-100 transition-opacity" />
        <span>${formatNumber(volume)}</span>
      </div>
    </div>
  )
})
