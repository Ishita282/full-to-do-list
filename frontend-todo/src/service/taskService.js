import axios from "axios";

const API_URL = 'https://full-to-do-list.onrender.com/tasks';
// const API_URL = "http://localhost:5000/tasks";

// Get all tasks
export const getAllTask = () => {
  return axios.get(API_URL);
};

// Create task
export const createTask = (data) => {
  return axios.post(API_URL, { data: data });
};

// Delete task
export const deleteTask = (_id) => {
  return axios.delete(`${API_URL}/${_id}`);
};

// Update task
export const updateTask = (id, data) => {
  return axios.put(`${API_URL}/${id}`, { data });
};

// Update status
export const updateTaskStatus = (id, status) => {
  return axios.patch(`${API_URL}/${id}/status`, { status });
};