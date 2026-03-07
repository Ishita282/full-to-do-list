import { useEffect, useState } from "react";
import Header from "./Header";
import Tasks from "./Tasks";
import CreateTasks from "./CreateTasks";
import {
  getAllTask,
  createTask,
  deleteTask as deleteTaskAPI,
  updateTask,
  updateTaskStatus,
} from "./service/taskService";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await getAllTask();
    setTasks(res.data.data);
  };

  const addTask = async (newTask) => {
    try {
      const res = await createTask(newTask);
      setTasks(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (_id) => {
    await deleteTaskAPI(_id);
    setTasks((prevTasks) => prevTasks.filter((task) => task._id !== _id));
  };

  const updateTaskHandler = async (_id) => {
    const title = prompt("Enter new title (or skip)");
    const content = prompt("Enter new content (or skip)");

    const updatedData = {};
    if (title) updatedData.title = title;
    if (content) updatedData.content = content;

    if (Object.keys(updatedData).length > 0) {
      await updateTask(_id, updatedData);
    } else {
      alert("Nothing to update");
    }

    fetchTasks();
  };

  const handleStatusUpdate = async (id, status) => {
    const res = await updateTaskStatus(id, status);
    setTasks(res.data.data); 
    }

  return (
    <div className="App">
      <Header />

      <CreateTasks onAdd={addTask} />

      <div className="blank"></div>

      {tasks.map((task) => (
        <Tasks
          key={task._id}
          id={task._id}
          title={task.title}
          content={task.content}
          taskStatus={task.status}
          onDelete={deleteTask}
          onUpdate={updateTaskHandler}
          onStatusUpdate={handleStatusUpdate}
        />
      ))}
    </div>
  );
}

export default App;
