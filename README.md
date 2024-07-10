# To-Do List Application

This is a simple To-Do List application that allows users to manage their tasks. The application supports creating, reading, updating, and deleting (CRUD) tasks. Each task includes a title, description, status (e.g., pending, in-progress, completed), and due date.

## Features

- Display a list of all tasks with their title, status, and due date.
- Edit and delete tasks.
- Create new tasks using a form that includes fields for Title, Description, Status, and Due Date.

## Technologies Used

- Frontend: React.js
- Backend: Node.js with Express
- Data Storage: In-memory storage (for simplicity)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (and npm) - [Download Node.js](https://nodejs.org/)
- Git - [Download Git](https://git-scm.com/)

## Setup Instructions

### Backend (Node.js with Express)

1. Clone the repository:
   ```bash
   git clone https://github.com/pratham2036/Todo.git
   cd todo-app/backend
2. Install dependencies:
   npm install express body-parser cors axios uuid
3. Start the backend server:
   node server
   The server will run on http://localhost:5000 by default.
### Frontend (React.js)
1. Open a new terminal (keep the backend server running) and navigate to the frontend directory:
   cd client
2. Install dependencies:
   npm install
3. Start the frontend development server:
   npm start
   The application will open in your default web browser at http://localhost:3000.


   




