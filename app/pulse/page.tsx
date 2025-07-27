"use client";

import Header from "@/components/pulse/Header";
import Main from "@/components/pulse/Pulse";
import Footer from "@/components/pulse/Footer";

export default function DashboardPage() {
return  (<div className="min-h-screen bg-[#0A0A0A] flex flex-col relative">
      {/* Fixed / sticky Header on top */}
      <Header />
      
      {/* Main content area grows and centers the Main frame */}
      <div className="flex-1 flex flex-col relative" style={{
        minHeight: 'calc(100vh - 100px)', // Reduced to account for header and footer
        paddingBottom: '10px' // Reduced padding for better spacing
      }}>
        <Main />
      </div>
      
      {/* Fixed footer at bottom */}
      <Footer />
    </div>)
}