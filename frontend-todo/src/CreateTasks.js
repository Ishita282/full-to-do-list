import React, { useState } from "react";
import "./style.css";

function CreateTasks(props) {
  const [Task, setTask] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setTask((prevTask) => {
      return {
        ...prevTask,
        [name]: value,
      };
    });
  }

  function submitTask(event) {
    props.onAdd(Task);
    setTask({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div className="CreateTasks">
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={Task.title}
          placeholder="Title"
        />
        <div className="blank"> </div>
        <textarea
          name="content"
          onChange={handleChange}
          value={Task.content}
          placeholder="Take a Task..."
          rows="3"
        />

        <button onClick={submitTask}>Add</button>
      </form>
    </div>
  );
}

export default CreateTasks;
