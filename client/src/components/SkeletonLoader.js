import React from 'react';

export const PostSkeleton = () => (
  <div className="card p-6 animate-pulse">
    <div className="flex items-center space-x-3 mb-4">
      <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-24"></div>
        <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-16"></div>
      </div>
    </div>
    <div className="space-y-3 mb-4">
      <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
    </div>
    <div className="flex items-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-600">
      <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-16"></div>
      <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-16"></div>
    </div>
  </div>
);

export const ProfileSkeleton = () => (
  <div className="card p-6 animate-pulse">
    <div className="text-center mb-6">
      <div className="w-24 h-24 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-4"></div>
      <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-32 mx-auto mb-2"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-40 mx-auto"></div>
    </div>
    <div className="space-y-4">
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-4/6"></div>
    </div>
  </div>
);

export const UserCardSkeleton = () => (
  <div className="card p-4 animate-pulse">
    <div className="flex items-center space-x-3">
      <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
      <div className="space-y-2 flex-1">
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-24"></div>
        <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-32"></div>
      </div>
    </div>
  </div>
);