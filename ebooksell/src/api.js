import axios from "axios";

const URL = "http://localhost:6500";

const registerUser = async (user) => {
  return axios.post(`${URL}/registerUser`, user);
};
const loginUser = async (user) => {
  return axios.post(`${URL}/loginUser`, user);
};

const displayUser = async () => {
  return axios.get(`${URL}`);
};
const displayUserById = async (id) => {
  return axios.get(`${URL}/${id}`);
};

const editUser = async (user, id) => {
  return axios.put(`${URL}/${id}`, user);
};

const deleteUser = async (id) => {
  return await axios.delete(`${URL}/${id}`);
};

const paginateUser = async (page, perPage) => {
  return await axios.get(`${URL}?page=${page}&perPage=${perPage}`);
};
export {
  registerUser,
  loginUser,
  displayUser,
  displayUserById,
  editUser,
  deleteUser,
  paginateUser,
};
