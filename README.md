# Social-Network-API


Social Network API
Description
A REST API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. This application uses Express.js for routing, a MongoDB database, and the Mongoose ODM.
Table of Contents

Installation
Usage
API Routes
Technologies Used
License

Installation

To install necessary dependencies, run the following command:npm install

Usage

To start the server, run: npm start

For development with nodemon: npm run dev


API Routes
User Routes

GET /api/users - Get all users
GET /api/users/:userId - Get a single user by ID
POST /api/users - Create a new user
PUT /api/users/:userId - Update a user
DELETE /api/users/:userId - Delete a user and their associated thoughts

Friend Routes

POST /api/users/:userId/friends/:friendId - Add a friend
DELETE /api/users/:userId/friends/:friendId - Remove a friend

Thought Routes

GET /api/thoughts - Get all thoughts
GET /api/thoughts/:thoughtId - Get a single thought by ID
POST /api/thoughts - Create a new thought
PUT /api/thoughts/:thoughtId - Update a thought
DELETE /api/thoughts/:thoughtId - Delete a thought

Reaction Routes

POST /api/thoughts/:thoughtId/reactions - Add a reaction to a thought
DELETE /api/thoughts/:thoughtId/reactions/:reactionId - Remove a reaction from a thought

Technologies Used

Express.js
MongoDB
Mongoose ODM
JavaScript

License
This project is licensed under the MIT License.
