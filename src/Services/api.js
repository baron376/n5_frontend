import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL;

export const requestPermission = async (id) => {
  return axios.get(`${API_BASE_URL}/permission/${id}`);
};

export const modifyPermission = async (id, formData) => {
  return axios.put(`${API_BASE_URL}/permission/${id}`, formData);
};

export const getPermissions = async () => {
  return axios.get(`${API_BASE_URL}/permission`);
};
