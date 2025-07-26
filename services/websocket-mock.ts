"use client"

import type { Token } from "@/types/token"

export interface PriceUpdate {
  id: string
  price: number
  priceChange24h: number
  volume24h: number
  transactions24h: number
  marketCap: number
  timestamp: number
}

class WebSocketMock {
  private listeners: ((update: PriceUpdate) => void)[] = []
  private interval: NodeJS.Timeout | null = null
  private tokens: Token[] = []

  connect(initialTokens: Token[]) {
    this.tokens = [...initialTokens]
    console.log("🔌 WebSocket Mock connected")

    // Start sending updates every 2-5 seconds
    this.interval = setInterval(
      () => {
        this.sendRandomUpdate()
      },
      Math.random() * 3000 + 2000,
    ) // 2-5 seconds
  }

  disconnect() {
    if (this.interval) {
      clearInterval(this.interval)
      this.interval = null
    }
    console.log("🔌 WebSocket Mock disconnected")
  }

  subscribe(callback: (update: PriceUpdate) => void) {
    this.listeners.push(callback)
    return () => {
      this.listeners = this.listeners.filter((listener) => listener !== callback)
    }
  }

  private sendRandomUpdate() {
    if (this.tokens.length === 0) return

    // Pick a random token to update
    const randomToken = this.tokens[Math.floor(Math.random() * this.tokens.length)]

    // Generate realistic price changes (-5% to +5%)
    const priceChangePercent = (Math.random() - 0.5) * 10 // -5% to +5%
    const newPrice = randomToken.price * (1 + priceChangePercent / 100)

    // Update the token in our local copy
    const tokenIndex = this.tokens.findIndex((t) => t.id === randomToken.id)
    if (tokenIndex !== -1) {
      this.tokens[tokenIndex] = {
        ...this.tokens[tokenIndex],
        price: newPrice,
        priceChange24h: randomToken.priceChange24h + priceChangePercent * 0.3,
        volume24h: randomToken.volume24h * (1 + (Math.random() - 0.5) * 0.2),
        transactions24h: Math.max(1, randomToken.transactions24h + Math.floor((Math.random() - 0.5) * 10)),
        marketCap: randomToken.marketCap * (1 + priceChangePercent / 100),
      }
    }

    const update: PriceUpdate = {
      id: randomToken.id,
      price: newPrice,
      priceChange24h: randomToken.priceChange24h + priceChangePercent * 0.3,
      volume24h: randomToken.volume24h * (1 + (Math.random() - 0.5) * 0.2),
      transactions24h: Math.max(1, randomToken.transactions24h + Math.floor((Math.random() - 0.5) * 10)),
      marketCap: randomToken.marketCap * (1 + priceChangePercent / 100),
      timestamp: Date.now(),
    }

    // Notify all listeners
    this.listeners.forEach((listener) => listener(update))
  }
}

export const websocketMock = new WebSocketMock()
