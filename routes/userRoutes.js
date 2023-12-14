import express from "express";
import { createUser, deleteUser, getUsers, updateUser } from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.get("/users", getUsers);
userRoutes.post("/users", createUser);
userRoutes.put("/users", updateUser);
userRoutes.delete("/users", deleteUser);

export default userRoutes;
