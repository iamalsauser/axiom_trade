"use client"

import { memo, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, Calendar, Bell, FileText } from "lucide-react"
import { TradingSettingsModal } from "./trading-settings-modal"

export const Footer = memo(function Footer() {
  const [isTradingSettingsOpen, setIsTradingSettingsOpen] = useState(false)

  return (
    <>
      <footer className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#444444]">
        <div className="w-full max-w-[1470px] h-[36px] mx-auto bg-[#1a1a1a] flex items-center justify-between px-2 sm:px-4 overflow-x-auto">
          {/* Left Section */}
          <div className="flex items-center gap-2 sm:gap-4 h-full min-w-0">
            {/* PRESET 1 - Clickable */}
            <button
              onClick={() => setIsTradingSettingsOpen(true)}
              className="flex items-center gap-1 sm:gap-2 bg-[#4f46e5] hover:bg-[#4338ca] px-2 sm:px-3 py-1 rounded text-white text-xs font-medium h-[24px] whitespace-nowrap transition-colors"
            >
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="hidden sm:inline">PRESET 1</span>
              <span className="sm:hidden">P1</span>
            </button>

            {/* Trackers Section - Hidden on mobile */}
            <div className="hidden sm:flex items-center gap-3 text-xs">
              {/* 1 = 0 */}
              <div className="flex items-center gap-1 bg-[#2a2a2a] px-2 py-1 rounded text-white">
                <Calendar className="w-3 h-3" />
                <span>1</span>
                <span>=</span>
                <span>0</span>
                <ChevronDown className="w-3 h-3" />
              </div>

              {/* Wallet Tracker */}
              <div className="flex items-center gap-1 bg-[#2a2a2a] px-2 py-1 rounded text-white">
                <div className="w-3 h-3 bg-gray-400 rounded"></div>
                <span>Wallet Tracker</span>
              </div>

              {/* Twitter Tracker */}
              <div className="flex items-center gap-1 bg-[#2a2a2a] px-2 py-1 rounded text-white">
                <Image src="/images/twitter-x-logo.png" alt="X" width={12} height={12} className="w-3 h-3" />
                <span>Twitter Tracker</span>
                <div className="w-1 h-1 bg-red-500 rounded-full"></div>
              </div>

              {/* PnL Tracker */}
              <div className="flex items-center gap-1 bg-[#2a2a2a] px-2 py-1 rounded text-white">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <span>PnL Tracker</span>
              </div>

              {/* Green circle with 8 */}
              <div className="flex items-center gap-1 bg-[#2a2a2a] px-2 py-1 rounded text-white">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-black text-xs font-bold">
                  8
                </div>
              </div>

              {/* $134.7 */}
              <div className="flex items-center gap-1 bg-[#2a2a2a] px-2 py-1 rounded text-green-400 font-mono">
                <span>=</span>
                <span>$134.7</span>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2 sm:gap-4 h-full">
            {/* Connection Status */}
            <div className="hidden sm:flex items-center gap-2 text-xs text-green-400">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Connection is stable</span>
            </div>

            {/* Mobile Connection Status */}
            <div className="flex sm:hidden items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>

            {/* US-W Dropdown - Hidden on mobile */}
            <div className="hidden sm:flex items-center gap-1 bg-[#2a2a2a] px-2 py-1 rounded text-white text-xs">
              <span>US-W</span>
              <ChevronDown className="w-3 h-3" />
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-1 sm:gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-white bg-transparent hover:bg-[#3a3a3a] p-1 w-6 h-6"
              >
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-white bg-transparent hover:bg-[#3a3a3a] p-1 w-6 h-6"
              >
                <Bell className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-white bg-transparent hover:bg-[#3a3a3a] p-1 w-6 h-6"
              >
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-400 rounded-full"></div>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-white bg-transparent hover:bg-[#3a3a3a] p-1 w-6 h-6"
              >
                <Image
                  src="/images/discord-logo.png"
                  alt="Discord"
                  width={16}
                  height={16}
                  className="w-3 h-3 sm:w-4 sm:h-4"
                />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-white bg-transparent hover:bg-[#3a3a3a] p-1 w-6 h-6"
              >
                <Image
                  src="/images/twitter-x-logo.png"
                  alt="X"
                  width={16}
                  height={16}
                  className="w-3 h-3 sm:w-4 sm:h-4"
                />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-white bg-transparent hover:bg-[#3a3a3a] p-1 w-6 h-6"
              >
                <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </div>
          </div>
        </div>
      </footer>

      {/* Trading Settings Modal */}
      <TradingSettingsModal isOpen={isTradingSettingsOpen} onClose={() => setIsTradingSettingsOpen(false)} />
    </>
  )
})
