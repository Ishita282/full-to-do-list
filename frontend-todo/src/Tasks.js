import React from "react";
import "./style.css";

function Tasks(props) {

  const handleClickDelete = () => {
    props.onDelete(props.id);
  };

  const handleClickUpdate = () => {
    props.onUpdate(props.id);
  };

  const updateStatus = () => {
  const newStatus = props.taskStatus === "Pending" ? "Done" : "Pending";
  props.onStatusUpdate(props.id, newStatus);
};

  return (
    <div className="Tasks">
      <h1>Task{props._id}</h1>
      <p>
        <strong>Title: </strong>
        {props.title}
      </p>
      <p>
        <strong>Content: </strong>
        {props.content}
      </p>
      <p>
        <strong>Status: </strong>
        {props.taskStatus}
      </p>

      <button onClick={handleClickDelete}>Delete</button>
      {/* <br /> */}
      <button onClick={handleClickUpdate}>Update</button>

      <button onClick={updateStatus}>
        Change Status
      </button>
    </div>
  );
}

export default Tasks;
