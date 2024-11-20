# Mini-Movie Critic 🎥

Mini-Movie Critic is a full-stack web application designed for movie enthusiasts to log, review, and rate their favorite movies. Users can add movies, categorize them by genre, upvote or downvote them, and edit or delete entries. The app leverages a clean, dynamic UI to provide an engaging user experience.

---

## Table of Contents
- [Features](#features)
- [Skills Applied and Learned](#skills-applied-and-learned)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Movie Management**: Add, edit, delete, and categorize movies by genre.
- **Voting System**: Upvote or downvote movies with heart and broken heart icons.
- **Dynamic Editing**: Inline editing for movie details with seamless updates.
- **Real-Time Updates**: Reflect changes in the UI without reloading the page (using `fetch` and `PUT` requests).
- **Responsive Design**: Accessible and visually appealing interface for all screen sizes.
- **Database Integration**: Persistent storage of movie data using MongoDB.

---

## Skills Applied and Learned

This project allowed me to utilize and refine various development skills:

### Full-Stack Development
- **Backend**: Built and configured a server using **Node.js** and **Express.js**.
- **Database**: Connected to **MongoDB** with the **MongoDB Node.js Driver**.
- **RESTful API**: Implemented `GET`, `POST`, `PUT`, and `DELETE` routes for CRUD operations.

### Frontend Development
- **Dynamic User Interface**: Created an interactive UI using **EJS**, **HTML5**, and **CSS**.
- **Client-Side JavaScript**: Utilized `fetch` API for asynchronous data handling and DOM manipulation.
- **Responsive Design**: Designed with **Font Awesome** and responsive elements to enhance usability.

### Problem Solving and Debugging
- Implemented error handling for database operations.
- Debugged asynchronous operations across the client-server architecture.
- Resolved UI glitches during inline editing and voting actions.

### Development Practices
- Organized the codebase for readability and scalability.
- Learned and implemented version control with `Git`.

---

## Technologies Used

- **Backend**: Node.js, Express.js, MongoDB
- **Frontend**: EJS, CSS, Font Awesome
- **Database**: MongoDB Atlas
- **Utilities**: Body-Parser

---

## Setup

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- MongoDB connection string (replace with your own in the `connectionString` variable).

### Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/mini-movie-critic.git
   cd mini-movie-critic

### Usage
1. run node server.js
2. Navigate to localhost:5555