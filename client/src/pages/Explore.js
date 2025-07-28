import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, User, Search } from 'lucide-react';
import { UserCardSkeleton } from '../components/SkeletonLoader';
import axios from 'axios';
import toast from 'react-hot-toast';

const Explore = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = users.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (user.skills && user.skills.some(skill => 
          skill.toLowerCase().includes(searchQuery.toLowerCase())
        ))
      );
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(users);
    }
  }, [searchQuery, users]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get('/api/users');
      setUsers(res.data);
      setFilteredUsers(res.data);
    } catch (error) {
      toast.error('Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-3 rounded-full">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Explore Developers
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Discover and connect with fellow developers
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-lg">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search developers by name, email, or skills..."
              className="input-field pl-10"
            />
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-400">
            {loading ? 'Loading...' : `Found ${filteredUsers.length} developer${filteredUsers.length !== 1 ? 's' : ''}`}
          </p>
        </div>

        {/* Users Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            // Loading skeletons
            Array.from({ length: 6 }, (_, i) => (
              <UserCardSkeleton key={i} />
            ))
          ) : filteredUsers.length > 0 ? (
            // Users list
            filteredUsers.map((user) => (
              <div key={user._id} className="card p-6 hover:scale-105 transform transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {user.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {user.email}
                  </p>
                </div>

                {user.bio && (
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                    {user.bio}
                  </p>
                )}

                {user.skills && user.skills.length > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {user.skills.slice(0, 3).map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                      {user.skills.length > 3 && (
                        <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1">
                          +{user.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <div className="text-center text-xs text-gray-500 dark:text-gray-400 mb-4">
                  Joined {formatDate(user.createdAt)}
                </div>

                <Link
                  to={`/profile/${user._id}`}
                  className="block w-full text-center btn-primary text-sm py-2"
                >
                  View Profile
                </Link>
              </div>
            ))
          ) : (
            // Empty state
            <div className="col-span-full">
              <div className="card p-12 text-center">
                <div className="bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 p-4 rounded-full w-fit mx-auto mb-6">
                  <Users className="h-12 w-12 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {searchQuery ? 'No developers found' : 'No developers yet'}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                  {searchQuery 
                    ? 'Try adjusting your search terms or browse all developers.'
                    : 'Be one of the first developers to join the DevConnect community!'
                  }
                </p>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="btn-outline mt-4"
                  >
                    Clear Search
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Explore;