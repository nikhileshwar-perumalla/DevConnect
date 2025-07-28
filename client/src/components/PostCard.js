import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Edit, Trash2, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import toast from 'react-hot-toast';
import CommentSection from './CommentSection';

const PostCard = ({ post, onDelete, onUpdate }) => {
  const { user } = useAuth();
  const [liked, setLiked] = useState(post.likes?.includes(user?._id) || false);
  const [likesCount, setLikesCount] = useState(post.likes?.length || 0);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState(post.comments || []);

  const handleLike = async () => {
    try {
      const res = await axios.post(`/api/posts/${post._id}/like`);
      setLiked(res.data.liked);
      setLikesCount(res.data.likesCount);
    } catch (error) {
      toast.error('Failed to update like');
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;
    
    try {
      await axios.delete(`/api/posts/${post._id}`);
      onDelete(post._id);
      toast.success('Post deleted successfully');
    } catch (error) {
      toast.error('Failed to delete post');
    }
  };

  const addComment = (comment) => {
    setComments(prev => [...prev, comment]);
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="card p-6 animate-fade-in">
      {/* Post Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Link to={`/profile/${post.author?._id}`}>
            <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-white" />
            </div>
          </Link>
          <div>
            <Link 
              to={`/profile/${post.author?._id}`}
              className="font-semibold text-gray-900 dark:text-white hover:text-primary-600 transition-colors"
            >
              {post.author?.name || 'Unknown User'}
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {formatDate(post.createdAt)}
            </p>
          </div>
        </div>

        {post.author?._id === user?._id && (
          <div className="flex items-center space-x-2">
            <Link
              to={`/edit-post/${post._id}`}
              className="p-2 text-gray-500 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-colors"
            >
              <Edit className="h-4 w-4" />
            </Link>
            <button
              onClick={handleDelete}
              className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      {/* Post Content */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {post.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {post.body}
        </p>
      </div>

      {/* Post Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-4">
          <button
            onClick={handleLike}
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
              liked
                ? 'text-red-600 bg-red-50 dark:bg-red-900/20'
                : 'text-gray-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20'
            }`}
          >
            <Heart className={`h-4 w-4 ${liked ? 'fill-current' : ''}`} />
            <span className="text-sm font-medium">{likesCount}</span>
          </button>

          <button
            onClick={() => setShowComments(!showComments)}
            className="flex items-center space-x-2 px-3 py-2 text-gray-500 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="text-sm font-medium">{comments.length}</span>
          </button>
        </div>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <CommentSection
            postId={post._id}
            comments={comments}
            onAddComment={addComment}
          />
        </div>
      )}
    </div>
  );
};

export default PostCard;