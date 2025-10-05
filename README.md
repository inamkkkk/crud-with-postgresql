# Node.js Blog API with PostgreSQL

This project implements a RESTful API for a blog using Node.js, Express, and PostgreSQL. It supports CRUD (Create, Read, Update, Delete) operations for blog posts.

## Features

*   Create, read, update, and delete blog posts.
*   Uses PostgreSQL for data storage.
*   Organized project structure with separate folders for routes, controllers, models, and middleware.
*   Error handling middleware.

## Technologies Used

*   Node.js
*   Express
*   PostgreSQL
*   pg (PostgreSQL client for Node.js)
*   dotenv (for environment variables)

## Installation

1.  Clone the repository:

    
    git clone <repository_url>
    cd node-postgres-blog
    

2.  Install dependencies:

    
    npm install
    

3.  Configure the database:

    *   Create a PostgreSQL database.
    *   Create a `.env` file in the root directory and add the following variables:

        
        DB_HOST=localhost
        DB_PORT=5432
        DB_NAME=your_database_name
        DB_USER=your_database_user
        DB_PASSWORD=your_database_password
        PORT=3000
        

        Replace the placeholder values with your actual database credentials.

4.  Run the database migrations (create the `posts` table):

    
    node utils/db.js
    

5.  Start the server:

    
    npm start
    

## API Endpoints

*   `GET /posts`: Get all blog posts.
*   `GET /posts/:id`: Get a specific blog post by ID.
*   `POST /posts`: Create a new blog post.
*   `PUT /posts/:id`: Update an existing blog post.
*   `DELETE /posts/:id`: Delete a blog post.

## Project Structure


node-postgres-blog/
├── server.js          # Main application file
├── routes/
│   └── posts.js       # Routes for blog posts
├── controllers/
│   └── posts.js       # Controller functions for blog posts
├── models/
│   └── post.js          # Model for blog posts (interacts with the database)
├── middlewares/
│   └── errorHandler.js # Error handling middleware
├── utils/
│   └── db.js          # Database connection utility
├── .env               # Environment variables
├── package.json
├── package-lock.json
└── README.md


## Example Usage

Using `curl` to create a post:


curl -X POST -H "Content-Type: application/json" -d '{"title": "My First Post", "content": "This is the content of my first post."}' http://localhost:3000/posts
