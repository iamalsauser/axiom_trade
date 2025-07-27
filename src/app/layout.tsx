//"use client"

import { useState } from 'react'
import { Header } from '../../components/organisms/header'
import { Dialog, DialogContent } from '../../components/ui/dialog'
import { X } from 'lucide-react'
import { PulseInterface } from '../../components/pulse-interface'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [pulseOpen, setPulseOpen] = useState(false)

  console.log("Rendering Header with onPulseClick");

  return (
    <html lang="en">
      <body>
        <Header onPulseClick={() => { console.log('Pulse clicked!'); setPulseOpen(true); }} />
        <Dialog open={pulseOpen} onOpenChange={setPulseOpen}>
          <DialogContent className="w-full max-w-none h-full p-0 bg-[#0a0a0a] border-0 rounded-none flex flex-col">
            <div className="flex justify-end p-4">
              <button onClick={() => setPulseOpen(false)} className="text-[#888888] hover:text-white focus:outline-none">
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
      </body>
    </html>
  )
} 