import React from 'react';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={`bg-gray-50 border-t border-gray-200 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                className="h-6 w-auto"
                src="/images/axiom-logo.png"
                alt="Axiom Trade"
              />
              <span className="ml-2 text-lg font-bold text-gray-900">Axiom Trade</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Discover the next generation of token trading. Real-time data, advanced analytics, 
              and seamless trading experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <img src="/images/twitter-x-logo.png" alt="Twitter" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <img src="/images/discord-logo.png" alt="Discord" className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Discover</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Pump Live</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Analytics</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Portfolio</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Help Center</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Documentation</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Contact</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Status</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Axiom Trade. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Terms of Service</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
