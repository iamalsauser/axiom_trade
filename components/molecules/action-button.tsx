"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { memo, useState } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Settings, TrendingUp, TrendingDown } from "lucide-react"

export const ActionButton = memo(function ActionButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [amount, setAmount] = useState("")
  const [slippage, setSlippage] = useState("0.5")

  const handleBuy = () => {
    // Handle buy logic here
    console.log("Buying with amount:", amount, "slippage:", slippage)
    setIsOpen(false)
    setAmount("")
  }

  return (
    <TooltipProvider>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            size="sm"
            className="bg-[#6366f1] hover:bg-[#5855eb] text-white font-medium rounded-lg w-full max-w-[100px] h-[32px] text-xs sm:text-sm transition-all duration-200 hover:scale-105"
          >
            <span className="hidden sm:inline">Buy</span>
            <span className="sm:hidden">+</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-[#1a1a1a] border-[#2a2a2a] text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              Buy Token
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            {/* Amount Input */}
            <div className="space-y-2">
              <Label htmlFor="amount" className="text-[#888888]">Amount (ETH)</Label>
              <Input
                id="amount"
                type="number"
                placeholder="0.0"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-[#2a2a2a] border-[#3a3a3a] text-white placeholder:text-[#666666] focus:border-[#6366f1]"
              />
            </div>

            {/* Slippage Settings */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-[#888888] flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  Slippage Tolerance
                </Label>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="text-[#6366f1] text-sm cursor-help">?</span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Maximum price change you're willing to accept</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <Select value={slippage} onValueChange={setSlippage}>
                <SelectTrigger className="bg-[#2a2a2a] border-[#3a3a3a] text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#2a2a2a] border-[#3a3a3a] text-white">
                  <SelectItem value="0.1">0.1%</SelectItem>
                  <SelectItem value="0.5">0.5%</SelectItem>
                  <SelectItem value="1.0">1.0%</SelectItem>
                  <SelectItem value="2.0">2.0%</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Transaction Summary */}
            <div className="bg-[#2a2a2a] rounded-lg p-3 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-[#888888]">You Pay</span>
                <span className="text-white">{amount || "0.0"} ETH</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#888888]">You Receive</span>
                <span className="text-white">~{amount ? (parseFloat(amount) * 1000).toFixed(0) : "0"} TOKENS</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#888888]">Price Impact</span>
                <span className="text-green-400">~0.1%</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button
                onClick={handleBuy}
                className="flex-1 bg-[#6366f1] hover:bg-[#5855eb] text-white"
                disabled={!amount || parseFloat(amount) <= 0}
              >
                Buy Now
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsOpen(false)}
                className="border-[#3a3a3a] text-[#888888] hover:bg-[#2a2a2a]"
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </TooltipProvider>
  )
})
