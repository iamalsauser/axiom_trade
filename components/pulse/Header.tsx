"use client";
import React, { useEffect } from "react";
import { Search, Star, Bell, MessageSquare, User, ChevronDown, Volume2, VolumeX } from "lucide-react";



export default function Header() {
    const NAV_ITEMS = [
  "Discover", "Pulse", "Trackers", "Perpetuals", "Yield", "Portfolio", "Rewards"
];
    useEffect(() => {
console.log("Header component mounted");

    }, [])
  return (
    <div>
      <div className="sticky top-0 z-50 w-full bg-black border-b border-gray-800">
        <div className="flex items-center justify-between py-2 pl-3 pr-2 sm:px-4 lg:px-6 min-h-[60px] max-h-[80px]">
          {/* ===== LEFT: LOGO + NAV ===== */}
          <div className="flex items-center min-w-0 flex-1">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0 select-none">
            <img src="/images/axiom-logo.png" alt="AXIOM Logo" className="h-8 sm:h-10 w-auto object-contain" />

            </div>

            {/* Navigation – scrollable if overflow */}
            <nav className="hidden md:flex items-center min-w-0 ml-6 space-x-3 sm:space-x-4 lg:space-x-6 overflow-x-auto">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item}
                  href="#"
                  className={`text-sm lg:text-base truncate whitespace-nowrap transition-colors
                    ${item === "Pulse" 
                      ? "text-blue-400 font-medium hover:text-blue-300" 
                      : "text-gray-300 hover:text-white"}
                  `}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* ===== RIGHT: SEARCH + CONTROLS ===== */}
          <div className="flex items-center flex-shrink-0 space-x-2 sm:space-x-3 lg:space-x-4 min-w-0">
            {/* Search Bar */}
            <div className="relative hidden sm:block w-[180px] md:w-[220px] lg:w-[240px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search by token or CA..."
                className="bg-[#191919] border border-gray-700 rounded-lg pl-9 pr-6 py-[7.5px] text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 w-full"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs font-medium select-none">/</span>
            </div>

            {/* Deposit Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-2.5 py-2 font-medium text-sm min-w-[42px] h-9 flex items-center justify-center transition-colors">
              <span className="hidden sm:inline">Deposit</span>
              <span className="sm:hidden text-lg leading-none">+</span>
            </button>

            {/* Icon Cluster */}
            <div className="flex items-center space-x-2 sm:space-x-2.5 lg:space-x-3 flex-shrink-0">
              {/* Star */}
              <button className="p-1 rounded hover:bg-gray-800 text-gray-400 hover:text-white transition-colors flex-shrink-0">
                <Star className="w-5 h-5" />
              </button>
              {/* Bell */}
              <button className="p-1 rounded hover:bg-gray-800 text-gray-400 hover:text-white transition-colors flex-shrink-0">
                <Bell className="w-5 h-5" />
              </button>
              {/* Message (with badge) */}
              <button className="relative p-1 rounded hover:bg-gray-800 text-gray-400 hover:text-white transition-colors flex-shrink-0">
                <MessageSquare className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-gray-600 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-semibold leading-none">0</span>
              </button>
              {/* Portfolio (gray circle with 0) */}
              <button className="relative p-0.5 flex items-center justify-center text-gray-400 hover:text-white transition-colors flex-shrink-0">
                <div className="w-5 h-5 bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-[10px] leading-none font-semibold text-white">0</span>
                </div>
              </button>
              {/* User */}
              <button className="p-1 rounded hover:bg-gray-800 text-gray-400 hover:text-white transition-colors flex-shrink-0">
                <User className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Control Buttons - Top Right Below Header */}
      <div className="w-full flex justify-end px-8 py-2 bg-[#0A0A0A]">
        <div className="flex items-center space-x-3">
          {/* Display Dropdown */}
          <div className="flex items-center space-x-2 bg-[#1A1A1A] rounded-lg px-3 py-2 cursor-pointer hover:bg-[#2A2A2A] transition-colors">
            <span className="text-sm text-[#9CA3AF]">Display</span>
            <ChevronDown className="w-4 h-4 text-[#9CA3AF]" />
          </div>
          
          {/* Volume Controls */}
          <div className="flex items-center space-x-2 bg-[#1A1A1A] rounded-lg px-3 py-2 cursor-pointer hover:bg-[#2A2A2A] transition-colors">
            <Volume2 className="w-4 h-4 text-[#9CA3AF] hover:text-white transition-colors" />
          </div>
          <div className="flex items-center space-x-2 bg-[#1A1A1A] rounded-lg px-3 py-2 cursor-pointer hover:bg-[#2A2A2A] transition-colors">
            <VolumeX className="w-4 h-4 text-[#9CA3AF] hover:text-white transition-colors" />
          </div>
          
          {/* Numerical Display */}
          <div className="flex items-center space-x-2 bg-[#1A1A1A] rounded-lg px-3 py-2 cursor-pointer hover:bg-[#2A2A2A] transition-colors">
            <span className="text-sm text-[#9CA3AF]">1</span>
            <span className="text-sm text-[#9CA3AF]">=</span>
            <span className="text-sm text-[#9CA3AF]">0</span>
            <ChevronDown className="w-4 h-4 text-[#9CA3AF]" />
          </div>
        </div>
      </div>
    </div>
  );
}
