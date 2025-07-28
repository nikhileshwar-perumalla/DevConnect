import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Edit, PlusCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import ProfileCard from '../components/ProfileCard';
import PostCard from '../components/PostCard';
import { ProfileSkeleton, PostSkeleton } from '../components/SkeletonLoader';
import axios from 'axios';
import toast from 'react-hot-toast';

const Profile = () => {
  const { userId } = useParams();
  const { user: currentUser } = useAuth();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [postsLoading, setPostsLoading] = useState(true);

  const isOwnProfile = currentUser?._id === userId;

  useEffect(() => {
    fetchUser();
    fetchUserPosts();
  }, [userId]);

  const fetchUser = async () => {
    try {
      const res = await axios.get(`/api/users/${userId}`);
      setUser(res.data);
    } catch (error) {
      toast.error('Failed to fetch user profile');
    } finally {
      setLoading(false);
    }
  };

  const fetchUserPosts = async () => {
    try {
      const res = await axios.get(`/api/posts/user/${userId}`);
      setPosts(res.data);
    } catch (error) {
      toast.error('Failed to fetch user posts');
    } finally {
      setPostsLoading(false);
    }
  };

  const handleDeletePost = (postId) => {
    setPosts(prev => prev.filter(post => post._id !== postId));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            {loading ? (
              <ProfileSkeleton />
            ) : user ? (
              <div className="space-y-6">
                <ProfileCard user={user} isOwnProfile={isOwnProfile} />
                
                {isOwnProfile && (
                  <div className="card p-4">
                    <Link
                      to="/create-post"
                      className="flex items-center justify-center space-x-2 w-full py-3 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-colors"
                    >
                      <PlusCircle className="h-5 w-5" />
                      <span>Create New Post</span>
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <div className="card p-6 text-center">
                <p className="text-gray-600 dark:text-gray-400">User not found</p>
              </div>
            )}
          </div>

          {/* Posts Section */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {isOwnProfile ? 'Your Posts' : `${user?.name}'s Posts`}
              </h2>
              {isOwnProfile && (
                <Link to="/create-post" className="btn-primary">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  New Post
                </Link>
              )}
            </div>

            <div className="space-y-6">
              {postsLoading ? (
                // Loading skeletons
                Array.from({ length: 2 }, (_, i) => (
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
                    {isOwnProfile ? 'No posts yet' : 'No posts from this user'}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
                    {isOwnProfile 
                      ? 'Share your first post with the DevConnect community!'
                      : 'This user hasn\'t shared any posts yet.'
                    }
                  </p>
                  {isOwnProfile && (
                    <Link to="/create-post" className="btn-primary">
                      Create Your First Post
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;