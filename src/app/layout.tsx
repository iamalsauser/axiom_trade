"use client"

import { Header } from '../../components/organisms/header'
import { Dialog, DialogContent } from '../../components/ui/dialog'
import { X } from 'lucide-react'
import { PulseInterface } from '../../components/pulse-interface'
import './globals.css'
import { ReduxProvider } from './ReduxProvider'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { setPulseDialogOpen } from '../features/uiSlice'

function LayoutContent({ children }: { children: React.ReactNode }) {
  const pulseOpen = useSelector((state: RootState) => state.ui.pulseDialogOpen)
  const dispatch = useDispatch()

  return (
    <>
      <Header />
      <Dialog open={pulseOpen} onOpenChange={(open) => dispatch(setPulseDialogOpen(open))}>
        <DialogContent className="w-full max-w-none h-full p-0 bg-[#0a0a0a] border-0 rounded-none flex flex-col">
          <div className="flex justify-end p-4">
            <button onClick={() => dispatch(setPulseDialogOpen(false))} className="text-[#888888] hover:text-white focus:outline-none">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-1 overflow-auto">
            <PulseInterface />
          </div>
        </DialogContent>
      </Dialog>
      <main className="min-h-screen bg-[#0a0a0a]">
        {children}
      </main>
    </>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <LayoutContent>{children}</LayoutContent>
        </ReduxProvider>
      </body>
    </html>
  )
} 