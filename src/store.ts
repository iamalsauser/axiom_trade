import { configureStore } from '@reduxjs/toolkit'
import tokensReducer from './features/tokensSlice'
import uiReducer from './features/uiSlice'

export const store = configureStore({
  reducer: {
    tokens: tokensReducer,
    ui: uiReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 