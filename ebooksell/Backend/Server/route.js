import express from 'express';
import { registerUser,loginUser } from '../Controller/controller.js';
const route = express.Router();



route.post("/registerUser",registerUser);
route.post("/loginUser",loginUser);

export default route;