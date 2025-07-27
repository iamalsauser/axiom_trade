import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Token = {
  logo: string
  name: string
  symbol: string
  price: number
  change24h: number
  marketCap: number
  volume: number
  description: string
}

export type SortKey = 'name' | 'symbol' | 'price' | 'change24h' | 'marketCap' | 'volume'
export type SortOrder = 'asc' | 'desc'

interface TokensState {
  list: Token[]
  loading: boolean
  error: string | null
  sortKey: SortKey
  sortOrder: SortOrder
  modalToken: Token | null
}

const initialState: TokensState = {
  list: [],
  loading: false,
  error: null,
  sortKey: 'name',
  sortOrder: 'asc',
  modalToken: null,
}

const tokensSlice = createSlice({
  name: 'tokens',
  initialState,
  reducers: {
    setTokens(state, action: PayloadAction<Token[]>) {
      state.list = action.payload
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload
    },
    setSortKey(state, action: PayloadAction<SortKey>) {
      state.sortKey = action.payload
    },
    setSortOrder(state, action: PayloadAction<SortOrder>) {
      state.sortOrder = action.payload
    },
    setModalToken(state, action: PayloadAction<Token | null>) {
      state.modalToken = action.payload
    },
  },
})

export const { setTokens, setLoading, setError, setSortKey, setSortOrder, setModalToken } = tokensSlice.actions
export default tokensSlice.reducer 