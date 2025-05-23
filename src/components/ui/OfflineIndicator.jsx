import React from 'react';
import { WifiOff, Wifi, AlertCircle } from 'lucide-react';
import { usePWA } from '../../hooks/usePWA';

const OfflineIndicator = () => {
  const { isOnline } = usePWA();

  if (isOnline) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-yellow-500 text-white px-4 py-2 text-center text-sm font-medium">
        <div className="flex items-center justify-center space-x-2 max-w-4xl mx-auto">
          <WifiOff className="w-4 h-4" />
          <span>You're currently offline</span>
          <AlertCircle className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default OfflineIndicator;