# To-Do List App

A full-stack **To-Do List application** built with the **MERN stack** (MongoDB, Express, React, Node.js) that allows you to **create, read, update, and delete tasks**.

---

## Features

- Create new tasks  
- View all tasks  
- Update a task (edit title/content or mark as done)  
- Delete tasks  
- Filter tasks by status (pending or completed)  

---

## API Structure

### Tasks

- **GET /tasks** – Get all tasks  
- **POST /tasks** – Create a new task  

### Task by ID

- **GET /tasks/:id** – Get a single task by ID  
- **PUT /tasks/:id** – Update a task by ID  
- **DELETE /tasks/:id** – Delete a task by ID  

### Filter Tasks

- **GET /tasks/pending** – Get all pending tasks  
- **GET /tasks/completed** – Get all completed tasks  

---

## Database Structure

**Task Document Example:**

```json
{
  "_id": "unique task id",
  "title": "Task title",
  "content": "Task details",
  "status": "pending | completed",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

---

## How to Run

1. **Clone the repository**

```bash
git clone <your-repo-url>
```

2. **Install backend dependencies**

```bash
cd backend
npm install
```

3. **Start the backend server**

```bash
npm run dev
```

4. **Install frontend dependencies**

```bash
cd frontend
npm install
```

5. **Start the frontend server**

```bash
npm start
```

6. **Open the app in your browser**

[http://localhost:3000](http://localhost:3000)

---

## Notes

- Backend runs on `http://localhost:8081` by default
- Frontend communicates with backend using Axios
- Make sure your MongoDB database is running and configured in the `.env` file