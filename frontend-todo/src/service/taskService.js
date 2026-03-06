import axios from 'axios';

const API_URL = 'https://full-to-do-list.onrender.com/tasks';

// Get all tasks
export const getAllTask = () => {
  return axios.get(API_URL);
};

// Create task
export const createTask = (data) => {
  return axios.post(API_URL, { data });
};

// Delete task
export const deleteTask = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

// Update task
export const updateTask = (id, data) => {
  return axios.put(`${API_URL}/${id}`, { data });
};