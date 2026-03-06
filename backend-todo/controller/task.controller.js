const taskModel = require("../model/task.model");

exports.getAllTasks = async (req, res) => { 
  const allTask = await taskModel.find();

  if (allTask.length === 0) {
    res.status(404).json({
      success: false,
      message: "System is empty",
    });
  }

  res.status(200).json({
    success: true,
    data: allTask,
  });
};

exports.createTask = async (req, res) => {
  const { data } = req.body;
  if (!data || Object.keys(data).length === 0) {
    return res.status(400).json({
      success: false,
      message: "Please provide all the required fields",
    });
  }

  await taskModel.create(data);
  const allTask = await taskModel.find();

  res.status(200).json({
    success: true,
    data: allTask,
  });

};

exports.getTasksById = async (req, res) => {
  const { id } = req.params;

  const task = await taskModel.findById(id);
  if (!task) {
    return res.status(404).json({
      success: false,
      message: `No task with id: ${id}`,
    });
  }
  res.status(200).json({
    success: true,
    message: `Task with id: ${id}`,
    data: task
  });
};

exports.updateTasksById = async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;

  if (!data || Object.keys(data).length === 0) {
    return res.status(400).json({
      success: false,
      message: "Please provide the updated data",
    });
  }

  const task = await taskModel.findById(id);
  if (!task) {
    return res.status(404).json({
      success: false,
      message: `No task with id: ${id}`,
    });
  }

  Object.assign(task, data)
  const updatedTask = await task.save()

  res.status(200).json({
    success: true,
    message: `Task with id: ${id}`,
    data: updatedTask
  });
};

exports.deleteTaskById = async (req, res) => {
      const { id } = req.params;

  const task = await taskModel.findById(id);

  if (!task) {
    return res.status(404).json({
      success: false,
      message: `No task with id: ${id}`,
    });
  }

  await taskModel.findByIdAndDelete(id);

  res.status(200).json({
    success: true,
    message: "Task deleted successfully!",
  });

}