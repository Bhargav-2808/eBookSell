import express from 'express';
import { registerUser } from '../Controller/controller.js';
const route = express.Router();



route.post("/registerUser",registerUser)

export default route;