"use client"

import { useState, useEffect, useCallback } from "react"
import type { Token } from "@/types/token"
import { websocketMock, type PriceUpdate } from "@/services/websocket-mock"

const mockTokens: Token[] = [
  {
    id: "1",
    symbol: "JProof",
    name: "JProof",
    logo: "/images/dove-token.png",
    chain: "ethereum",
    price: 0.00000123,
    priceChange24h: 0.5,
    marketCap: 15800000,
    liquidity: 194000,
    volume24h: 118000,
    volumeChange24h: 23.45,
    transactions24h: 9,
    buyTransactions: 4,
    sellTransactions: 5,
    auditScore: 85,
    auditPercentage: 89.97,
    auditPaid: true,
    lastUpdated: new Date().toISOString(),
    age: "2mo",
    badges: ["telegram", "website", "twitter", "dexscreener"],
  },
  {
    id: "2",
    symbol: "NOBODY",
    name: "Nobody Sausa...",
    logo: "/images/bc-token.png",
    chain: "ethereum",
    price: 0.0000087,
    priceChange24h: 0.74,
    marketCap: 14900000,
    liquidity: 736000,
    volume24h: 6980,
    volumeChange24h: -12.34,
    transactions24h: 21,
    buyTransactions: 12,
    sellTransactions: 9,
    auditScore: 78,
    auditPercentage: 39.49,
    auditPaid: true,
    lastUpdated: new Date().toISOString(),
    age: "1mo",
    badges: ["telegram", "website", "twitter", "dexscreener"],
  },
  {
    id: "3",
    symbol: "Robotaxi",
    name: "Tesla Robo...",
    logo: "/images/dev-character.png",
    chain: "ethereum",
    price: 0.067,
    priceChange24h: -0.53,
    marketCap: 387000,
    liquidity: 45000,
    volume24h: 2630,
    volumeChange24h: 8.76,
    transactions24h: 51,
    buyTransactions: 13,
    sellTransactions: 38,
    auditScore: 92,
    auditPercentage: 31.18,
    auditPaid: true,
    lastUpdated: new Date().toISOString(),
    age: "11d",
    badges: ["telegram", "website", "twitter", "dexscreener"],
  },
  {
    id: "4",
    symbol: "QQQ",
    name: "NASCRAQ",
    logo: "/images/hashtag-token.png",
    chain: "ethereum",
    price: 0.000156,
    priceChange24h: 0.8,
    marketCap: 1390000,
    liquidity: 63600,
    volume24h: 5060,
    volumeChange24h: 18.23,
    transactions24h: 80,
    buyTransactions: 38,
    sellTransactions: 42,
    auditScore: 71,
    auditPercentage: 16.2,
    auditPaid: true,
    lastUpdated: new Date().toISOString(),
    age: "7d",
    badges: ["telegram", "website", "twitter", "dexscreener"],
  },
  {
    id: "5",
    symbol: "UNEMPLOYED",
    name: "UNEMPLOY...",
    logo: "/images/dove-token.png",
    chain: "ethereum",
    price: 0.0000234,
    priceChange24h: 7.13,
    marketCap: 108000,
    liquidity: 18300,
    volume24h: 5610,
    volumeChange24h: -5.67,
    transactions24h: 100,
    buyTransactions: 41,
    sellTransactions: 59,
    auditScore: 65,
    auditPercentage: 28.96,
    auditPaid: true,
    lastUpdated: new Date().toISOString(),
    age: "1d",
    badges: ["telegram", "website", "dexscreener"],
  },
  {
    id: "6",
    symbol: "Fartcoin",
    name: "Fartcoin ...",
    logo: "/images/bc-token.png",
    chain: "solana",
    price: 0.000045,
    priceChange24h: -0.12,
    marketCap: 873000000,
    liquidity: 8670000,
    volume24h: 44500,
    volumeChange24h: -8.45,
    transactions24h: 105,
    buyTransactions: 33,
    sellTransactions: 72,
    auditScore: 58,
    auditPercentage: 19.07,
    auditPaid: true,
    lastUpdated: new Date().toISOString(),
    age: "8mo",
    badges: ["telegram", "website", "twitter"],
  },
  {
    id: "7",
    symbol: "aura",
    name: "aura",
    logo: "/images/hashtag-token.png",
    chain: "ethereum",
    price: 0.000045,
    priceChange24h: -0.27,
    marketCap: 102000000,
    liquidity: 2200000,
    volume24h: 40100,
    volumeChange24h: -8.45,
    transactions24h: 142,
    buyTransactions: 47,
    sellTransactions: 95,
    auditScore: 58,
    auditPercentage: 11.25,
    auditPaid: true,
    lastUpdated: new Date().toISOString(),
    age: "1y",
    badges: ["telegram", "website", "twitter", "dexscreener"],
  },
]

export function useTokenData() {
  const [tokens, setTokens] = useState<Token[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [priceUpdates, setPriceUpdates] = useState<Map<string, { timestamp: number; direction: "up" | "down" }>>(
    new Map(),
  )

  const handlePriceUpdate = useCallback((update: PriceUpdate) => {
    setTokens((prevTokens) => {
      const updatedTokens = prevTokens.map((token) => {
        if (token.id === update.id) {
          const oldPrice = token.price
          const newPrice = update.price
          const direction = newPrice > oldPrice ? "up" : "down"

          // Track the price update for animation
          setPriceUpdates(
            (prev) =>
              new Map(
                prev.set(update.id, {
                  timestamp: update.timestamp,
                  direction,
                }),
              ),
          )

          // Clear the animation after 2 seconds
          setTimeout(() => {
            setPriceUpdates((prev) => {
              const newMap = new Map(prev)
              newMap.delete(update.id)
              return newMap
            })
          }, 2000)

          return {
            ...token,
            price: newPrice,
            priceChange24h: update.priceChange24h,
            volume24h: update.volume24h,
            transactions24h: update.transactions24h,
            marketCap: update.marketCap,
            lastUpdated: new Date(update.timestamp).toISOString(),
          }
        }
        return token
      })
      return updatedTokens
    })
  }, [])

  useEffect(() => {
    const loadTokens = async () => {
      try {
        setLoading(true)
        await new Promise((resolve) => setTimeout(resolve, 800))
        setTokens(mockTokens)

        // Connect to WebSocket mock
        websocketMock.connect(mockTokens)

        // Subscribe to price updates
        const unsubscribe = websocketMock.subscribe(handlePriceUpdate)

        return unsubscribe
      } catch (err) {
        setError("Failed to load tokens")
      } finally {
        setLoading(false)
      }
    }

    const unsubscribePromise = loadTokens()

    return () => {
      unsubscribePromise.then((unsubscribe) => {
        if (unsubscribe) unsubscribe()
      })
      websocketMock.disconnect()
    }
  }, [handlePriceUpdate])

  return { tokens, loading, error, priceUpdates }
}
