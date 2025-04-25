# TaskManager Frontend

The TaskManager Frontend is a client-side application built using **Next.js** and **Chakra UI**. It allows users to interact with the TaskManager backend to manage tasks, authenticate, and view task details in a clean, responsive interface.

## Features

- **User Authentication**: Users can register, log in, and manage their sessions.
- **Task Management**: Add, update, and delete tasks.
- **Responsive UI**: A modern, user-friendly interface built with Chakra UI.
- **API Integration**: Communicates with the backend API to perform CRUD operations on tasks.

## Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nurmohammadapu/Task-Manager-Frontend.git
   cd Task-Manager-Frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables by creating a `.env.local` file in the root of the project directory with the following content:

   ```
   NEXT_PUBLIC_API_BASE_URL=https://taskmanager-yoir.onrender.com
   ```

   This URL is used to make API requests to the backend.

4. Run the development server:

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

## Environment Variables

The project uses the following environment variable:

- `NEXT_PUBLIC_API_BASE_URL`: The base URL of the TaskManager backend API. Set it to `https://taskmanager-yoir.onrender.com`.

## Usage

Once the application is running, you can:

- **Register**: Sign up with a new account.
- **Login**: Sign in to your account.
- **Manage Tasks**: Add, update, and delete tasks from your task list.

The app will make API calls to the backend for task operations and display the results in the UI.

## Technologies Used

- **Next.js**: A React framework for building server-side rendered applications.
- **Chakra UI**: A simple, modular, and accessible component library for building React applications.
- **React**: A JavaScript library for building user interfaces.
- **Axios**: For making HTTP requests to the backend API.

## Running the Application

To start the app, run:

```bash
npm run dev
```

Access the app in your browser at `http://localhost:3000`.

## Contributing

Feel free to contribute by forking the repository, making improvements, and submitting a pull request.
