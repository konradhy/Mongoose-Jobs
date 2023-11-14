# Mongoose Jobs
Mongoose Jobs is a job search tracking website built on the MERN stack (MongoDB, Express.js, React, and Node.js). It is designed to help users who are seeking employment keep track of their job search progress in one convenient location.

## Demo
https://mongoosejobs.onrender.com
Please allow servers up to one minute to reboot after visiting link

## Features
User authentication using JSON Web Tokens (JWT)
Secure password hashing using bcryptjs
Pagination, and search with MongoDB
Input validation using validator
Error handling middleware
Reusable React Components
Redux pattern

## Getting Started
- Clone the repository to your local machine
- Configure Database and populate with script
- Create a .env file in the root directory with the following variables:
  - JWT_SECRET: A secret string used to sign JSON Web Tokens
  - MONGODB_URL: The URL of your MongoDB instance
  - JWT_LIFETIME: 1d
- Run npm install-dependencies (or npm setup-production if going live)
- Run npm client and npm start in different terminals

The application should be available at http://localhost:3000


