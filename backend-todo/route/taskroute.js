const express = require("express");
const {
  getAllTasks,
  createTask,
  getTasksById,
  updateTasksById,
  deleteTaskById
} = require("../controller/task.controller")
const route = express.Router();
route.use(express.json());


/*
Route: /task
Method: GET
Description: Get all tasks
Access: Public
Parameter: None
*/

route.get("/", getAllTasks);

/*
Route: /task
Method: POST 
Description: Create a task
Access: Public
Parameter: None
*/

route.post("/", createTask);

/*
Route: /task/{id}
Method: GET
Description: Get the task by id
Access: Public
Parameter: id
*/

route.get("/:id", getTasksById);

/*
Route: /task/{id}
Method: PUT
Description: Update the task by id and mark as done
Access: Public
Parameter: id
*/

route.put("/:id", updateTasksById);

/*
Route: /task/{id}
Method: DELETE
Description: Delete the task by id
Access: Public
Parameter: id
*/

route.delete("/:id", deleteTaskById);


module.exports = route;
