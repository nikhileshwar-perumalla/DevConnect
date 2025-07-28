import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, RefreshCw } from 'lucide-react';
import PostCard from '../components/PostCard';
import { PostSkeleton } from '../components/SkeletonLoader';
import axios from 'axios';
import toast from 'react-hot-toast';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async (showRefreshing = false) => {
    try {
      if (showRefreshing) setRefreshing(true);
      const res = await axios.get('/api/posts');
      setPosts(res.data);
    } catch (error) {
      toast.error('Failed to fetch posts');
    } finally {
      setLoading(false);
      if (showRefreshing) setRefreshing(false);
    }
  };

  const handleDeletePost = (postId) => {
    setPosts(prev => prev.filter(post => post._id !== postId));
  };

  const handleRefresh = () => {
    fetchPosts(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Developer Feed
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Discover what developers are sharing today
              </p>
            </div>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={handleRefresh}
                disabled={refreshing}
                className="flex items-center space-x-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
                <span>Refresh</span>
              </button>
              
              <div className="flex justify-center">
                <Link to="/create-post" className="btn-primary flex items-center">
                  <PlusCircle className="h-4 w-4 mr-2" />
                    New Post
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Posts Feed */}
        <div className="space-y-6">
          {loading ? (
            // Loading skeletons
            Array.from({ length: 3 }, (_, i) => (
              <PostSkeleton key={i} />
            ))
          ) : posts.length > 0 ? (
            // Posts list
            posts.map((post) => (
              <PostCard
                key={post._id}
                post={post}
                onDelete={handleDeletePost}
              />
            ))
          ) : (
            // Empty state
            <div className="card p-12 text-center">
              <div className="bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 p-4 rounded-full w-fit mx-auto mb-6">
                <PlusCircle className="h-12 w-12 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                No posts yet
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
                Be the first to share something with the DevConnect community!
              </p>
              <Link to="/create-post" className="btn-primary">
                Create Your First Post
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;