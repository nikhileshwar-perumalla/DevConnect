import React from 'react';
import { Link } from 'react-router-dom';
import { User, MapPin, Calendar } from 'lucide-react';

const ProfileCard = ({ user, isOwnProfile = false }) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    });
  };

  return (
    <div className="card p-6 animate-fade-in">
      <div className="text-center mb-6">
        <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="h-12 w-12 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {user.name}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
      </div>

      {user.bio && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">About</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {user.bio}
          </p>
        </div>
      )}

      {user.skills && user.skills.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {user.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
        <div className="flex items-center space-x-1">
          <Calendar className="h-4 w-4" />
          <span>Joined {formatDate(user.createdAt)}</span>
        </div>
      </div>

      {isOwnProfile && (
        <div className="text-center">
          <Link
            to={`/profile/${user._id}/edit`}
            className="btn-primary"
          >
            Edit Profile
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;