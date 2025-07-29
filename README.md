# DevConnect - Developer Social Media Platform

A full-stack social media platform built specifically for developers to connect, share knowledge, and grow their careers.

## 🚀 Features

### Frontend Features
- **Modern React UI** with functional components and hooks
- **Responsive Design** with Tailwind CSS
- **Dark/Light Mode** toggle with persistent preferences
- **Authentication** with JWT and protected routes
- **Real-time Notifications** with toast alerts
- **Smooth Animations** and micro-interactions

### Backend Features
- **RESTful API** built with Node.js and Express
- **MongoDB Database** with Mongoose ODM
- **JWT Authentication** with secure password hashing
- **Input Validation** and error handling
- **CORS enabled** for cross-origin requests

### Core Functionality
- **User Authentication** - Register, login, logout
- **Post Management** - Create, read, update, delete posts
- **Social Features** - Like posts, comment on posts
- **User Profiles** - Bio, skills, and personal information
- **Developer Discovery** - Explore and connect with other developers
- **Search Functionality** - Find developers by name, email, or skills

## 🛠 Tech Stack

### Frontend
- React 18
- React Router DOM
- Tailwind CSS
- Lucide React (icons)
- Axios (HTTP client)
- React Hot Toast (notifications)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Tokens (JWT)
- bcryptjs (password hashing)
- express-validator (input validation)

## 📁 Project Structure

```
devconnect/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── context/        # React context providers
│   │   ├── pages/          # Page components
│   │   ├── utils/          # Utility functions
│   │   ├── App.js          # Main app component
│   │   └── index.js        # App entry point
│   └── package.json
├── server/                 # Express backend
│   ├── config/            # Configuration files
│   ├── middleware/        # Custom middleware
│   ├── models/            # Mongoose models
│   ├── routes/            # API routes
│   ├── server.js          # Server entry point
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- MongoDB (local or cloud)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd devconnect
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install

   # Install server dependencies
   cd server && npm install

   # Install client dependencies
   cd ../client && npm install
   ```

3. **Environment Setup**
   ```bash
   # Copy environment files
   cp .env.example .env
   cp server/.env.example server/.env
   ```

4. **Configure Environment Variables**
   
   Edit `server/.env`:
   ```env
   MONGODB_URI=mongodb://localhost:27017/devconnect
   JWT_SECRET=your-super-secret-jwt-key-here
   PORT=5000
   NODE_ENV=development
   ```

5. **Start the Application**
   ```bash
   # From the root directory - starts both client and server
   npm run dev
   
   # Or start individually:
   # Server only
   npm run server
   
   # Client only
   npm run client
   ```

6. **Access the Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 📱 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/verify` - Verify JWT token

### Posts
- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create new post
- `GET /api/posts/:id` - Get single post
- `PUT /api/posts/:id` - Update post
- `DELETE /api/posts/:id` - Delete post
- `POST /api/posts/:id/like` - Like/unlike post
- `POST /api/posts/:id/comments` - Add comment to post
- `GET /api/posts/:id/comments` - Get post comments
- `GET /api/posts/user/:userId` - Get posts by user

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user profile

## 🎨 Design Features

- **Apple-level Design Aesthetics** with attention to detail
- **Gradient Color Schemes** for modern visual appeal
- **Responsive Layouts** for all device sizes
- **Smooth Animations** and hover effects
- **Dark Mode Support** with system preference detection
- **Loading States** with skeleton components
- **Toast Notifications** for user feedback

## 🔒 Security Features

- **JWT Authentication** with secure token storage
- **Password Hashing** using bcryptjs
- **Input Validation** on both client and server
- **Protected Routes** for authenticated users only
- **CORS Configuration** for secure cross-origin requests

## 🚀 Deployment

### Frontend (Vercel)
1. Build the client: `cd client && npm run build`
2. Deploy the build folder to Vercel

### Backend (Railway/Render)
1. Set environment variables on the hosting platform
2. Deploy the server folder
3. Update the client's API base URL

### Environment Variables for Production
```env
MONGODB_URI=your-mongodb-connection-string
JWT_SECRET=your-production-jwt-secret
NODE_ENV=production
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request





---

Built with ❤️ for the developer community
