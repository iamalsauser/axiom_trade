"use client"

import { DiscoverPage } from "@/components/templates/discover-page"
import { PumpLivePage } from "@/components/templates/pump-live-page"
import { ErrorBoundary } from "@/components/ui/error-boundary"
import { useState, Suspense } from "react"

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-[#6366f1] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-[#888888]">Loading AXIOM Pro...</p>
      </div>
    </div>
  )
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("discover")

  const renderPage = () => {
    switch (activeTab) {
      case "discover":
        return <DiscoverPage activeTab={activeTab} onTabChange={setActiveTab} />
      case "trending":
        return <DiscoverPage activeTab={activeTab} onTabChange={setActiveTab} />
      case "pump-live":
        return <PumpLivePage activeTab={activeTab} onTabChange={setActiveTab} />
      default:
        return <DiscoverPage activeTab={activeTab} onTabChange={setActiveTab} />
    }
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingFallback />}>
        <main role="main">{renderPage()}</main>
      </Suspense>
    </ErrorBoundary>
  )
} 