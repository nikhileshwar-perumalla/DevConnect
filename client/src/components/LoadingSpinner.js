import React from 'react';
import { Code } from 'lucide-react';

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-4 rounded-full mb-4 animate-pulse-slow mx-auto w-fit">
          <Code className="h-8 w-8 text-white" />
        </div>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500 mx-auto mb-4"></div>
        <p className="text-gray-600 dark:text-gray-400">Loading DevConnect...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;