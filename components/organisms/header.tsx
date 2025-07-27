"use client"

import { Button } from "@/components/ui/button"
import { Search, Star, Bell, MessageSquare, ChevronDown, User, Menu, X } from "lucide-react"
import { memo, useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { PulseInterface } from "@/components/pulse-interface"
import { useParams, useRouter } from "next/navigation"
import { PathParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime"

export const Header = memo(function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [pulseOpen, setPulseOpen] = useState(false)

  const handlePulseClick = () => {
    setPulseOpen(true)
  }

  return (
    <header className="bg-[#0a0a0a] border-b border-[#2a2a2a] flex flex-row w-full h-[64px] min-h-[64px] px-[12px] sm:px-[24px] gap-[12px] sm:gap-[24px] justify-between items-center">
      <Dialog open={pulseOpen} onOpenChange={setPulseOpen}>
        <DialogContent className="w-full max-w-none h-full p-0 bg-[#0a0a0a] border-0 rounded-none flex flex-col">
          <DialogTitle className="sr-only">Pulse</DialogTitle>
          <DialogDescription className="sr-only">Axiom Pulse interface modal</DialogDescription>
          <div className="flex justify-end p-4">
            <button onClick={() => setPulseOpen(false)} className="text-[#888888] hover:text-white focus:outline-none">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-1 overflow-auto">
            <PulseInterface />
          </div>
        </DialogContent>
      </Dialog>
      <div className="flex items-center justify-between w-full max-w-[1470px] mx-auto">
        {/* Left side - Logo and Navigation */}
        <div className="flex items-center gap-4 sm:gap-8">
          {/* Logo */}
          <div className="flex items-center w-[100px] sm:w-[138px] h-[26px] sm:h-[36px]">
            <Image
              src="/images/axiom-logo.png"
              alt="AXIOM Pro - Advanced Token Trading Platform"
              width={138}
              height={36}
              className="w-full h-full object-contain"
              priority={true}
              sizes="(max-width: 640px) 100px, 138px"
              quality={90}
            />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:text-white bg-transparent hover:bg-[#2a2a2a] p-2 rounded-full w-[32px] h-[32px] sm:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <Menu className="w-4 h-4" aria-hidden="true" />
          </Button>

          {/* Desktop Navigation Menu */}
          <nav className="hidden sm:flex items-center gap-6" role="navigation" aria-label="Main navigation">
            <a
              href="/"
              className="text-[#6366f1] text-sm font-medium hover:text-[#5855eb] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded-sm px-1 py-1"
              aria-current="page"
            >
              Discover
            </a>
            <button
              type="button"
              onClick={handlePulseClick}
              className="text-[#888888] text-sm font-medium hover:text-[#5855eb] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded-sm px-1 py-1"
            >
              Pulse
            </button>
            <a
              href="#trackers"
              className="text-[#888888] text-sm font-medium hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded-sm px-1 py-1"
            >
              Trackers
            </a>
            <a
              href="#perpetuals"
              className="text-[#888888] text-sm font-medium hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded-sm px-1 py-1"
            >
              Perpetuals
            </a>
            <a
              href="#yield"
              className="text-[#888888] text-sm font-medium hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded-sm px-1 py-1"
            >
              Yield
            </a>
            <a
              href="#portfolio"
              className="text-[#888888] text-sm font-medium hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded-sm px-1 py-1"
            >
              Portfolio
            </a>
            <a
              href="#rewards"
              className="text-[#888888] text-sm font-medium hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded-sm px-1 py-1"
            >
              Rewards
            </a>
          </nav>
        </div>

        {/* Right side - Actions and User Controls */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Search Icon */}
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:text-white bg-transparent hover:bg-[#2a2a2a] p-2 rounded-full w-[32px] h-[32px]"
            aria-label="Search tokens"
          >
            <Search className="w-4 h-4" aria-hidden="true" />
          </Button>

          {/* Deposit Button */}
          <Button className="bg-[#6366f1] hover:bg-[#5855eb] text-white text-xs sm:text-sm font-semibold rounded-full px-2 sm:px-4 h-[32px] focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2 focus:ring-offset-[#0a0a0a]">
            <span className="hidden sm:inline">Deposit</span>
            <span className="sm:hidden" aria-label="Deposit funds">
              +
            </span>
          </Button>

          {/* Desktop Icons */}
          <div className="hidden sm:flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-white bg-transparent hover:bg-[#2a2a2a] p-2 rounded-full w-[32px] h-[32px]"
              aria-label="Favorites"
            >
              <Star className="w-4 h-4" aria-hidden="true" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-white bg-transparent hover:bg-[#2a2a2a] p-2 rounded-full w-[32px] h-[32px]"
              aria-label="Notifications"
            >
              <Bell className="w-4 h-4" aria-hidden="true" />
            </Button>

            {/* Stats Display Group */}
            <div
              className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#2a2a2a] px-3 rounded-full h-[32px] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
              role="button"
              tabIndex={0}
              aria-label="Trading statistics"
            >
              <MessageSquare className="w-4 h-4 text-white" aria-hidden="true" />
              <span className="text-white text-sm font-medium" aria-hidden="true">
                ≡
              </span>
              <span className="text-[#6366f1] text-sm font-medium">0</span>
              <div className="w-4 h-4 bg-orange-500 rounded-full" aria-hidden="true"></div>
              <span className="text-[#6366f1] text-sm font-medium">0</span>
              <ChevronDown className="w-3 h-3 text-white" aria-hidden="true" />
            </div>
          </div>

          {/* User Profile */}
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:text-white bg-transparent hover:bg-[#2a2a2a] p-2 rounded-full w-[32px] h-[32px]"
            aria-label="User profile"
          >
            <User className="w-4 h-4" aria-hidden="true" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div
          className="absolute top-[64px] left-0 right-0 bg-[#0a0a0a] border-b border-[#2a2a2a] sm:hidden z-50"
          id="mobile-navigation"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col p-4 gap-4">
            <a
              href="#discover"
              className="text-[#6366f1] text-sm font-medium hover:text-[#5855eb] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded-sm px-2 py-2"
              aria-current="page"
            >
              Discover
            </a>
            <button
              type="button"
              onClick={handlePulseClick}
              className="text-[#888888] text-sm font-bold hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded-sm px-2 py-2 bg-blue-500/10 hover:bg-blue-500/20"
            >
              Pulse
            </button>
            <a
              href="#trackers"
              className="text-[#888888] text-sm font-medium hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded-sm px-2 py-2"
            >
              Trackers
            </a>
            <a
              href="#perpetuals"
              className="text-[#888888] text-sm font-medium hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded-sm px-2 py-2"
            >
              Perpetuals
            </a>
            <a
              href="#yield"
              className="text-[#888888] text-sm font-medium hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded-sm px-2 py-2"
            >
              Yield
            </a>
            <a
              href="#portfolio"
              className="text-[#888888] text-sm font-medium hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded-sm px-2 py-2"
            >
              Portfolio
            </a>
            <a
              href="#rewards"
              className="text-[#888888] text-sm font-medium hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded-sm px-2 py-2"
            >
              Rewards
            </a>
          </nav>
        </div>
      )}
    </header>
  )
})
