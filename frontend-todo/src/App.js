import React, { useEffect, useState } from "react";
import Header from "./Header";
import Tasks from "./Tasks";
import CreateTasks from "./CreateTasks";
import { getAllTask, createTask } from "./service/taskService";
import { deleteTask as deleteTaskAPI } from "./service/taskService";
import { updateTask } from "./service/taskService";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  async function fetchTasks() {
    const res = await getAllTask();
    setTasks(res.data.data);
  }

  async function addTask(newTask) {
    const res = await createTask(newTask);
    setTasks(res.data.data);
  }

  async function deleteTask(id) {
  await deleteTaskAPI(id);

  // Remove the deleted task from state immediately
  setTasks(prevTasks => prevTasks.filter(task => task._id !== id));
}

  async function updateTaskHandler(id) {
    const title = prompt("Enter new title");
    const content = prompt("Enter new content");

    await updateTask(id, { title, content });

    fetchTasks();
  }

  return (
    <div className="App">
      <Header />
      <CreateTasks onAdd={addTask} />
      {tasks.map((taskItem) => (
        <Tasks
          key={taskItem._id}
          id={taskItem._id}
          title={taskItem.title}
          content={taskItem.content}
          onDelete={deleteTask}
          onUpdate={updateTaskHandler}
        />
      ))}
    </div>
  );
}

export default App;
