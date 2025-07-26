export interface Token {
  id: string
  symbol: string
  name: string
  logo: string
  chain: string
  price: number
  priceChange24h: number
  marketCap: number
  liquidity: number
  volume24h: number
  volumeChange24h: number
  transactions24h: number
  buyTransactions?: number
  sellTransactions?: number
  auditScore: number
  auditPercentage?: number
  auditPaid?: boolean
  lastUpdated: string
  age?: string
  badges?: string[]
}

export interface SortConfig {
  key: string
  direction: "asc" | "desc"
}
