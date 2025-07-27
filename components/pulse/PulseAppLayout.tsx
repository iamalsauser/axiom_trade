"use client";

import React from "react";
import Header from "./Header";
import Main from "./Pulse";
import Footer from "./Footer";

const PulseAppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col relative">
      {/* Fixed / sticky Header on top */}
      <Header />
      {/* Main content area grows and centers the Main frame */}
      <div className="flex-1 flex flex-col relative" style={{
        minHeight: 'calc(100vh - 100px)',
        paddingBottom: '10px'
      }}>
        <Main />
      </div>
      {/* Fixed footer at bottom */}
      <Footer />
    </div>
  );
};

export default PulseAppLayout;
