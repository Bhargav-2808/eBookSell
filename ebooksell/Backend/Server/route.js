import express from 'express';
import { registerUser,loginUser ,displayUser,displayUserById,editUser, deleteUser,paginateUser} from '../Controller/controller.js';
const route = express.Router();



route.post("/registerUser",registerUser);
route.post("/loginUser",loginUser);
// route.get("/",displayUser);
route.get("/:id",displayUserById);
route.put("/:id",editUser);
route.delete("/:id",deleteUser);
route.get("/",paginateUser);

export default route;