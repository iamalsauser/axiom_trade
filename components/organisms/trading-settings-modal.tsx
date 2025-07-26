import React, { useState } from 'react';

interface TradingSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (settings: TradingSettings) => void;
  className?: string;
}

interface TradingSettings {
  slippage: number;
  gasPrice: number;
  gasLimit: number;
  autoApprove: boolean;
  confirmTransactions: boolean;
}

export const TradingSettingsModal: React.FC<TradingSettingsModalProps> = ({ 
  isOpen, 
  onClose, 
  onSave,
  className = '' 
}) => {
  const [settings, setSettings] = useState<TradingSettings>({
    slippage: 0.5,
    gasPrice: 20,
    gasLimit: 300000,
    autoApprove: false,
    confirmTransactions: true
  });

  const handleSettingChange = (key: keyof TradingSettings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    onSave(settings);
    onClose();
  };

  const handleReset = () => {
    setSettings({
      slippage: 0.5,
      gasPrice: 20,
      gasLimit: 300000,
      autoApprove: false,
      confirmTransactions: true
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose} />
        
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  Trading Settings
                </h3>
                
                <div className="space-y-4">
                  {/* Slippage */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Slippage Tolerance (%)
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        step="0.1"
                        min="0.1"
                        max="50"
                        value={settings.slippage}
                        onChange={(e) => handleSettingChange('slippage', parseFloat(e.target.value))}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <span className="flex items-center text-sm text-gray-500">%</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Higher slippage increases success rate but may result in worse prices
                    </p>
                  </div>

                  {/* Gas Price */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gas Price (Gwei)
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={settings.gasPrice}
                      onChange={(e) => handleSettingChange('gasPrice', parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Higher gas price = faster transaction confirmation
                    </p>
                  </div>

                  {/* Gas Limit */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gas Limit
                    </label>
                    <input
                      type="number"
                      min="21000"
                      step="1000"
                      value={settings.gasLimit}
                      onChange={(e) => handleSettingChange('gasLimit', parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Maximum gas units for transaction execution
                    </p>
                  </div>

                  {/* Auto Approve */}
                  <div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={settings.autoApprove}
                        onChange={(e) => handleSettingChange('autoApprove', e.target.checked)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">Auto-approve token spending</span>
                    </label>
                    <p className="text-xs text-gray-500 mt-1 ml-6">
                      Automatically approve tokens for trading (saves time but less secure)
                    </p>
                  </div>

                  {/* Confirm Transactions */}
                  <div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={settings.confirmTransactions}
                        onChange={(e) => handleSettingChange('confirmTransactions', e.target.checked)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">Confirm all transactions</span>
                    </label>
                    <p className="text-xs text-gray-500 mt-1 ml-6">
                      Show confirmation dialog before executing trades
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              onClick={handleSave}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Save Settings
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Reset to Default
            </button>
            <button
              type="button"
              onClick={onClose}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
