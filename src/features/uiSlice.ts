import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UIState {
  pulseDialogOpen: boolean
}

const initialState: UIState = {
  pulseDialogOpen: false,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setPulseDialogOpen(state, action: PayloadAction<boolean>) {
      state.pulseDialogOpen = action.payload
    },
  },
})

export const { setPulseDialogOpen } = uiSlice.actions
export default uiSlice.reducer 