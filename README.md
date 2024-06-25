# Full-Stack Project Setup

This project is a full-stack application with separate frontend and backend components. The backend is set up using `nodemon` for automatic restarts, and the frontend is served with a development server.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Project Structure

- `backend/`: Contains the server-side code.
- `frontend/`: Contains the client-side code.

## Getting Started

Follow these steps to set up and run the project.

### 1. Clone the Repository

```bash
git clone https://github.com/Rahulyadav0296/StockMarketPortfolioApp.git
cd your-repo

# For the backend
cd backend
npm install

# For the frontend
cd ../frontend
npm install

# Navigate to the backend directory
cd backend

# Start the server with nodemon
nodemon start

# Navigate to the frontend directory
cd frontend

# Start the development server
npm run dev
