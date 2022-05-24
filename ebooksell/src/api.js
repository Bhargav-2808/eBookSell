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

const paginateUser = async (page, perPage,search) => {
  return await axios.get(`${URL}?page=${page}&perPage=${perPage}&search=${search}`);
};

const addCategory = async (category) => {
  return axios.post(`${URL}/addcategory`, category);
};

const paginateCategory = async (page,perPage,search) => {
  return axios.get(`${URL}/paginateCategory?page=${page}&perPage=${perPage}&search=${search}`);
};
const displayCategoryById = async (id) => {
  return axios.get(`${URL}/displaycategory/${id}`);
};

const editCategory = async (category, id) => {
  return axios.put(`${URL}/editcategory/${id}`, category);
};

const deleteCategory = async (id) => {
  return await axios.delete(`${URL}/deletecategory/${id}`);
};

const displayCategory = async () => {
  return axios.get(`${URL}/displaycategory`);
};

const addBook = async (book) => {
  return axios.post(`${URL}/addbook`, book);
};


const displayBook = async (page,perPage,search) => {
  return axios.get(`${URL}/getbook?page=${page}&perPage=${perPage}&search=${search}`);
};


const getBookById = async (id) => {
  return axios.get(`${URL}/getbook/${id}`);
};

const editBook = async (book, id) => {
  return axios.put(`${URL}/editbook/${id}`, book);
};

const deleteBook = async (id) => {
  return await axios.delete(`${URL}/deletebook/${id}`);
};

const addCart = async (book)=>{
  return axios.post(`${URL}/addcart`,book)
}
export {
  registerUser,
  loginUser,
  displayUser,
  displayUserById,
  editUser,
  deleteUser,
  paginateUser,
  addCategory,
  paginateCategory,
  displayCategoryById,
  editCategory,
  deleteCategory,
  displayCategory,
  addBook,
  displayBook,
  getBookById,
  editBook,
  deleteBook,
  addCart
};
