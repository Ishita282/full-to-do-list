import React from "react";
import "./style.css";

function Tasks(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="Tasks">
      <h1>{props.title}</h1>
      <p>{props.content}</p>

      <button onClick={handleClick}>Delete</button>
      <br></br>
      <button onClick={() => props.onUpdate(props.id)}>Update</button>
    </div>
  );
}

export default Tasks;
