import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Users, MessageCircle, Zap, ArrowRight, Github, Twitter, Linkedin } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const LandingPage = () => {
  const { isAuthenticated } = useAuth();

  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Connect with Developers",
      description: "Network with fellow developers from around the world and build meaningful professional relationships."
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Share Knowledge",
      description: "Post about your projects, share coding tips, and engage in technical discussions with the community."
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Showcase Skills",
      description: "Display your technical skills and expertise on your profile to attract potential collaborators and employers."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Stay Updated",
      description: "Keep up with the latest trends, technologies, and best practices in software development."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="mb-8">
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-4 rounded-2xl mx-auto w-fit mb-6">
                <Code className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  DevConnect
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                The ultimate social platform for developers to connect, share knowledge, 
                and grow their careers. Join thousands of passionate developers worldwide.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              {isAuthenticated ? (
                <Link to="/home" className="btn-primary text-lg px-8 py-4">
                  Go to Dashboard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              ) : (
                <>
                  <Link to="/register" className="btn-primary text-lg px-8 py-4">
                    Join DevConnect
                    
                  </Link>
                  <Link to="/login" className="btn-outline text-lg px-8 py-4">
                    Sign In
                  </Link>
                </>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">10K+</div>
                <div className="text-gray-600 dark:text-gray-400">Active Developers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">50K+</div>
                <div className="text-gray-600 dark:text-gray-400">Posts Shared</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">100K+</div>
                <div className="text-gray-600 dark:text-gray-400">Connections Made</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose DevConnect?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need to connect with the developer community and advance your career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card p-6 text-center hover:scale-105 transform transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 p-3 rounded-full w-fit mx-auto mb-4">
                  <div className="text-primary-600 dark:text-primary-400">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Connect with Developers Worldwide?
          </h2>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            Join DevConnect today and become part of a thriving community of passionate developers.
          </p>
          {!isAuthenticated && (
            <Link to="/register" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 inline-flex items-center">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-2 rounded-lg">
                <Code className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">DevConnect</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 DevConnect. All rights reserved. Built with ❤️ for developers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
