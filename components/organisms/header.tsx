import React from 'react';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header className={`w-full border-b border-gray-200 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-auto"
                src="/images/axiom-logo.png"
                alt="Axiom Trade"
              />
            </div>
            <div className="ml-4">
              <h1 className="text-xl font-bold text-gray-900">Axiom Trade</h1>
              <p className="text-sm text-gray-500">Token Discovery Platform</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            >
              Discover
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              Pump Live
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              Analytics
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-900 p-2">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
              </svg>
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
