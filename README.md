# NewsScraper

A full-stack web application designed to automatically scrape, display, and manage top news stories. Built with a modern Monorepo architecture, NewsScraper allows users to view extracted data in real-time, register/log in securely, and bookmark their favorite stories.

## 🚀 Tech Stack

**Frontend**
*   **Framework:** React (Bootstrapped with Vite)
*   **Styling:** Tailwind CSS (Modern UI & animations)
*   **Routing:** React Router v6
*   **State Management:** React Context API
*   **HTTP Client:** Axios

**Backend**
*   **Runtime:** Node.js
*   **Framework:** Express.js
*   **Database:** MongoDB & Mongoose
*   **Scraping:** Cheerio
*   **Authentication:** JSON Web Tokens (JWT) & bcryptjs

**Deployment**
*   **Hosting:** Vercel (Experimental Multi-Service Monorepo)

## 📁 Folder Structure

```text
webscraper/
│
├── backend/               # Node.js & Express Backend
│   ├── src/
│   │   ├── config/        # Database configurations (db.js)
│   │   ├── controllers/   # Route handler logic
│   │   ├── middleware/    # Custom middlewares (e.g., auth validation)
│   │   ├── models/        # Mongoose schemas (User, Story)
│   │   ├── routes/        # Express route definitions
│   │   └── server.js      # Main backend entry point
│   ├── .env               # Backend environment variables
│   └── package.json       # Backend dependencies
│
├── frontend/              # Vite & React Frontend
│   ├── src/
│   │   ├── api/           # Axios instance configuration
│   │   ├── assets/        # Static files and images
│   │   ├── components/    # Reusable UI components (Navbar, StoryCard)
│   │   ├── context/       # Global state management (AuthContext)
│   │   ├── pages/         # View components (Home, Login, Register, Bookmarks)
│   │   ├── App.jsx        # Root component and Routing logic
│   │   ├── index.css      # Tailwind & Global styles
│   │   └── main.jsx       # React application mounting
│   ├── .env               # Frontend environment variables
│   ├── tailwind.config.js # Tailwind CSS configuration
│   └── package.json       # Frontend dependencies
│
├── vercel.json            # Vercel multi-service routing config
└── README.md              # Project documentation
```

## ⚙️ Local Development Setup

### 1. Prerequisites
*   Node.js (v16 or higher)
*   MongoDB (Local instance or MongoDB Atlas URI)

### 2. Backend Setup
```bash
cd backend
npm install

# Create a .env file in the backend directory with your credentials:
# PORT=5000
# MONGO_URI=your_mongodb_connection_string
# JWT_SECRET=your_secret_key

npm run dev # Starts the nodemon dev server on http://localhost:5000
```

### 3. Frontend Setup
```bash
cd frontend
npm install

# Your frontend/.env file should contain:
# VITE_BACKEND_URI=http://localhost:5000/api

npm run dev # Starts the Vite development server
```

## ☁️ Deployment

This project is structured for a unified, single-project deployment on Vercel using `experimentalServices`.

1. Push your monorepo to GitHub.
2. Import the project into Vercel, leaving the root directory as `webscraper/`.
3. Configure your Environment Variables in the Vercel project settings:
   * **Backend:** Add `MONGO_URI` and `JWT_SECRET`.
   * **Frontend:** Set `VITE_BACKEND_URI=/_/backend/api` (so the production frontend points to the routed backend).
4. Deploy!

## ✨ Key Features
*   **Web Scraping:** Automatically extracts and serves top story data.
*   **User Authentication:** Secure signup and login flow using JWT.
*   **Bookmarks:** Logged-in users can bookmark specific stories and view them on a protected page.
*   **Dynamic UI:** Fully responsive design using Tailwind CSS.
