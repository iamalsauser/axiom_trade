"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { memo, useState } from "react"
import { cn } from "@/lib/utils"

interface TradingSettingsModalProps {
  isOpen: boolean
  onClose: () => void
}

export const TradingSettingsModal = memo(function TradingSettingsModal({ isOpen, onClose }: TradingSettingsModalProps) {
  const [activePreset, setActivePreset] = useState("preset1")
  const [buySettings, setBuySettings] = useState({
    slippage: "20",
    priority: "0.001",
    bribe: "0.001",
  })
  const [sellSettings, setSellSettings] = useState({
    slippage: "20",
    priority: "0.001",
    bribe: "0.001",
  })
  const [autoFee, setAutoFee] = useState(false)
  const [maxFee, setMaxFee] = useState("0.1")
  const [mevMode, setMevMode] = useState("off")
  const [rpcUrl, setRpcUrl] = useState("https://a...e.com")

  const handleBuySettingChange = (key: string, value: string) => {
    setBuySettings((prev) => ({ ...prev, [key]: value }))
  }

  const handleSellSettingChange = (key: string, value: string) => {
    setSellSettings((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#1a1a1a] border-[#2a2a2a] text-white max-w-md w-full p-0 gap-0">
        {/* Header */}
        <DialogHeader className="flex flex-row items-center justify-between p-4 border-b border-[#2a2a2a]">
          <DialogTitle className="text-white font-semibold">Trading Settings</DialogTitle>
        </DialogHeader>

        {/* Content */}
        <div className="p-4 space-y-6">
          {/* Preset Tabs */}
          <div className="flex gap-1 bg-[#2a2a2a] p-1 rounded-lg">
            <button
              onClick={() => setActivePreset("preset1")}
              className={cn(
                "flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                activePreset === "preset1"
                  ? "bg-[#6366f1] text-white"
                  : "text-[#888888] hover:text-white hover:bg-[#3a3a3a]",
              )}
            >
              PRESET 1
            </button>
            <button
              onClick={() => setActivePreset("preset2")}
              className={cn(
                "flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                activePreset === "preset2"
                  ? "bg-[#6366f1] text-white"
                  : "text-[#888888] hover:text-white hover:bg-[#3a3a3a]",
              )}
            >
              PRESET 2
            </button>
            <button
              onClick={() => setActivePreset("preset3")}
              className={cn(
                "flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                activePreset === "preset3"
                  ? "bg-[#6366f1] text-white"
                  : "text-[#888888] hover:text-white hover:bg-[#3a3a3a]",
              )}
            >
              PRESET 3
            </button>
          </div>

          {/* Buy and Sell Settings */}
          <div className="grid grid-cols-2 gap-4">
            {/* Buy Settings */}
            <div className="space-y-3">
              <h3 className="text-[#00ff88] font-medium text-sm">Buy Settings</h3>
              <div className="space-y-3">
                <div>
                  <Input
                    value={buySettings.slippage}
                    onChange={(e) => handleBuySettingChange("slippage", e.target.value)}
                    className="bg-[#2a2a2a] border-[#3a3a3a] text-white text-center"
                  />
                  <label className="text-[#888888] text-xs mt-1 block text-center">📊 SLIPPAGE</label>
                </div>
                <div>
                  <Input
                    value={buySettings.priority}
                    onChange={(e) => handleBuySettingChange("priority", e.target.value)}
                    className="bg-[#2a2a2a] border-[#3a3a3a] text-white text-center"
                  />
                  <label className="text-[#888888] text-xs mt-1 block text-center">🎯 PRIORITY</label>
                </div>
                <div>
                  <Input
                    value={buySettings.bribe}
                    onChange={(e) => handleBuySettingChange("bribe", e.target.value)}
                    className="bg-[#2a2a2a] border-[#3a3a3a] text-white text-center"
                  />
                  <label className="text-[#888888] text-xs mt-1 block text-center">💰 BRIBE</label>
                </div>
              </div>
            </div>

            {/* Sell Settings */}
            <div className="space-y-3">
              <h3 className="text-[#ff4444] font-medium text-sm">Sell Settings</h3>
              <div className="space-y-3">
                <div>
                  <Input
                    value={sellSettings.slippage}
                    onChange={(e) => handleSellSettingChange("slippage", e.target.value)}
                    className="bg-[#2a2a2a] border-[#3a3a3a] text-white text-center"
                  />
                  <label className="text-[#888888] text-xs mt-1 block text-center">📊 SLIPPAGE</label>
                </div>
                <div>
                  <Input
                    value={sellSettings.priority}
                    onChange={(e) => handleSellSettingChange("priority", e.target.value)}
                    className="bg-[#2a2a2a] border-[#3a3a3a] text-white text-center"
                  />
                  <label className="text-[#888888] text-xs mt-1 block text-center">🎯 PRIORITY</label>
                </div>
                <div>
                  <Input
                    value={sellSettings.bribe}
                    onChange={(e) => handleSellSettingChange("bribe", e.target.value)}
                    className="bg-[#2a2a2a] border-[#3a3a3a] text-white text-center"
                  />
                  <label className="text-[#888888] text-xs mt-1 block text-center">💰 BRIBE</label>
                </div>
              </div>
            </div>
          </div>

          {/* Auto Fee Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="auto-fee"
                checked={autoFee}
                onCheckedChange={setAutoFee}
                className="border-[#3a3a3a] data-[state=checked]:bg-[#6366f1] data-[state=checked]:border-[#6366f1]"
              />
              <label htmlFor="auto-fee" className="text-white text-sm">
                Auto Fee
              </label>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#888888] text-sm">MAX FEE</span>
              <Input
                value={maxFee}
                onChange={(e) => setMaxFee(e.target.value)}
                className="bg-[#2a2a2a] border-[#3a3a3a] text-white w-16 text-center"
              />
            </div>
          </div>

          {/* MEV Mode */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-white font-medium text-sm">MEV Mode</span>
              <div className="w-4 h-4 rounded-full bg-[#3a3a3a] flex items-center justify-center">
                <span className="text-[#888888] text-xs">?</span>
              </div>
            </div>
            <RadioGroup value={mevMode} onValueChange={setMevMode} className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="off"
                  id="off"
                  className="border-[#3a3a3a] text-[#6366f1] data-[state=checked]:border-[#6366f1]"
                />
                <Label htmlFor="off" className="text-white text-sm">
                  ✅ Off
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="reduced"
                  id="reduced"
                  className="border-[#3a3a3a] text-[#6366f1] data-[state=checked]:border-[#6366f1]"
                />
                <Label htmlFor="reduced" className="text-white text-sm">
                  Reduced
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="secure"
                  id="secure"
                  className="border-[#3a3a3a] text-[#6366f1] data-[state=checked]:border-[#6366f1]"
                />
                <Label htmlFor="secure" className="text-white text-sm">
                  Secure
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* RPC URL */}
          <div className="space-y-2">
            <label className="text-white font-medium text-sm">RPC</label>
            <Input
              value={rpcUrl}
              onChange={(e) => setRpcUrl(e.target.value)}
              className="bg-[#2a2a2a] border-[#3a3a3a] text-white"
              placeholder="Enter RPC URL"
            />
          </div>

          {/* Continue Button */}
          <Button onClick={onClose} className="w-full bg-[#6366f1] hover:bg-[#5855eb] text-white font-medium py-3">
            Continue
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
})
