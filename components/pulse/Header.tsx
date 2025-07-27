"use client";
import React, { useEffect } from "react";
import { Search, Star, Bell, MessageSquare, User, ChevronDown, Volume2, VolumeX } from "lucide-react";



export default function Header() {
    const NAV_ITEMS = [
  "Discover", "Pulse", "Trackers", "Perpetuals", "Yield", "Portfolio", "Rewards"
];
    const [activeNav, setActiveNav] = React.useState("Pulse");
    const [activeControl, setActiveControl] = React.useState<string | null>(null);
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
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-xs rotate-45"></div>
              <span className="font-bold text-base sm:text-lg lg:text-xl tracking-tight truncate">AXIOM</span>
              <span className="bg-gray-700 text-gray-300 rounded px-1 sm:px-2 py-0.5 text-[0.7em] font-medium ml-0.5">Pro</span>
            </div>

            {/* Navigation – scrollable if overflow */}
            <nav className="hidden md:flex items-center min-w-0 ml-6 space-x-3 sm:space-x-4 lg:space-x-6 overflow-x-auto">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setActiveNav(item)}
                  className={`text-sm lg:text-base truncate whitespace-nowrap transition-colors px-2 py-1 rounded focus:outline-none ${activeNav === item ? 'bg-[#3B82F6] text-white font-medium' : 'text-gray-300 hover:text-white'}`}
                >
                  {item}
                </button>
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
              {["Star", "Bell", "MessageSquare", "Portfolio", "User"].map((icon, idx) => (
                <button
                  key={icon}
                  type="button"
                  onClick={() => setActiveControl(icon)}
                  className={`p-1 rounded transition-colors flex-shrink-0 focus:outline-none ${activeControl === icon ? 'bg-[#3B82F6] text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}
                >
                  {icon === "Star" && <Star className="w-5 h-5" />}
                  {icon === "Bell" && <Bell className="w-5 h-5" />}
                  {icon === "MessageSquare" && <MessageSquare className="w-5 h-5" />}
                  {icon === "Portfolio" && <div className="w-5 h-5 bg-gray-600 rounded-full flex items-center justify-center"><span className="text-[10px] leading-none font-semibold text-white">0</span></div>}
                  {icon === "User" && <User className="w-5 h-5" />}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Control Buttons - Top Right Below Header */}
      <div className="w-full flex justify-end px-8 py-2 bg-[#0A0A0A]">
        <div className="flex items-center space-x-3">
          {/* Display Dropdown */}
          <button type="button" className="flex items-center space-x-2 bg-[#1A1A1A] rounded-lg px-3 py-2 cursor-pointer hover:bg-[#2A2A2A] transition-colors focus:outline-none">
            <span className="text-sm text-[#9CA3AF]">Display</span>
            <ChevronDown className="w-4 h-4 text-[#9CA3AF]" />
          </button>
          
          {/* Volume Controls */}
          <button type="button" className="flex items-center space-x-2 bg-[#1A1A1A] rounded-lg px-3 py-2 cursor-pointer hover:bg-[#2A2A2A] transition-colors focus:outline-none">
            <Volume2 className="w-4 h-4 text-[#9CA3AF] hover:text-white transition-colors" />
          </button>
          <button type="button" className="flex items-center space-x-2 bg-[#1A1A1A] rounded-lg px-3 py-2 cursor-pointer hover:bg-[#2A2A2A] transition-colors focus:outline-none">
            <VolumeX className="w-4 h-4 text-[#9CA3AF] hover:text-white transition-colors" />
          </button>
          
          {/* Numerical Display */}
          <button type="button" className="flex items-center space-x-2 bg-[#1A1A1A] rounded-lg px-3 py-2 cursor-pointer hover:bg-[#2A2A2A] transition-colors focus:outline-none">
            <span className="text-sm text-[#9CA3AF]">1</span>
            <span className="text-sm text-[#9CA3AF]">=</span>
            <span className="text-sm text-[#9CA3AF]">0</span>
            <ChevronDown className="w-4 h-4 text-[#9CA3AF]" />
          </button>
        </div>
      </div>
    </div>
  );
}
