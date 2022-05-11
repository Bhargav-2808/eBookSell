import express from "express";
import {
  registerUser,
  loginUser,
  displayUser,
  displayUserById,
  editUser,
  deleteUser,
  paginateUser,
  addCategory,
  displayCategoryById,
  editCategory,
  deleteCategory,
  paginateCategory,
  displayCategory,
  addBook,
  upload,
  getBook,
  getBookById,
  editBook,
  deleteBook
} from "../Controller/controller.js";
const route = express.Router();

// route.get("/",displayUser);
route.get("/", paginateUser);
route.get("/paginateCategory", paginateCategory);
route.get("/displaycategory", displayCategory);
route.get("/getbook", getBook);
route.get("/:id", displayUserById);
route.get("/displaycategory/:id", displayCategoryById);
route.get("/getbook/:id", getBookById);
route.post("/registerUser", registerUser);
route.post("/loginUser", loginUser);
route.post("/addcategory", addCategory);
route.post("/addbook",upload.single('pic'), addBook);
route.put("/:id", editUser);
route.put("/editcategory/:id", editCategory);
route.put("/editbook/:id",upload.single('picture'), editBook);
route.delete("/:id", deleteUser);
route.delete("/deletecategory/:id", deleteCategory);
route.delete("/deletebook/:id", deleteBook);

export default route;
