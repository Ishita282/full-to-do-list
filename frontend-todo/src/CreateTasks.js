import React, { useState } from "react";
import "./style.css";

function CreateTasks(props) {
  const [Task, setTask] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTask((prevTask) => {
      return {
        ...prevTask,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAdd(Task);
    setTask({
      title: "",
      content: "",
    });
  };

  return (
    <div className="CreateTasks">
      <form>
        Write the name of your To-do
        <br />
        <input
          name="title"
          value={Task.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <div className="blank"></div>
        Write the name of your To-do
        <br />
        <textarea
          name="content"
          value={Task.content}
          onChange={handleChange}
          placeholder="Take a Task..."
          rows="3"
        />
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateTasks;
