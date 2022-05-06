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
  displayCategory,
  displayCategoryById,
  editCategory,
  deleteCategory,
} from "../Controller/controller.js";
const route = express.Router();

// route.get("/",displayUser);
route.get("/", paginateUser);
route.get("/displaycategory", displayCategory);
route.get("/:id", displayUserById);
route.get("/displaycategory/:id", displayCategoryById);
route.post("/registerUser", registerUser);
route.post("/loginUser", loginUser);
route.post("/addcategory", addCategory);
route.put("/:id", editUser);
route.put("/editcategory/:id", editCategory);
route.delete("/:id", deleteUser);
route.delete("/deletecategory/:id", deleteCategory);

export default route;
