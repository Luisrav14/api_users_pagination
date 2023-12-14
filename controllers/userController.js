import { response } from "express";
import UserModel from "../models/UserModel.js";

export const createUser = async (req, res = response) => {
  const userData = req.body;

  try {
    const newUser = new UserModel(userData);

    await newUser.save();

    res.status(201).json({
      ok: true,
      message: "User created",
    });
  } catch (error) {
    console.error("Error:", error);

    res.status(500).json({ ok: false, message: "Internal server error." });
  }
};

export const getUsers = async (req, res = response) => {
  try {
    const users = await UserModel.find();

    res.status(201).json({
      ok: true,
      data: users,
    });
  } catch (error) {
    console.error("Error:", error);

    res.status(500).json({ ok: false, message: "Internal server error." });
  }
};

export const updateUser = async (req, res = response) => {
  const { uid } = req.params;
  const userData = req.body;

  try {
    const user = await UserModel.findById(uid);

    if (user) {
      await user.updateOne(userData);

      res.status(201).json({
        ok: true,
        message: "User updated",
      });
    } else {
      res.status(404).json({
        ok: false,
        message: "User not found",
      });
    }
  } catch (error) {
    console.error("Error:", error);

    res.status(500).json({ ok: false, message: "Internal server error." });
  }
};

export const deleteUser = async (req, res = response) => {
  const { uid } = req.params;

  try {
    const user = await UserModel.findByIdAndDelete(uid);

    if (user) {
      res.status(201).json({
        ok: true,
        message: "User deleted",
      });
    } else {
      res.status(404).json({
        ok: false,
        message: "User not found",
      });
    }
  } catch (error) {
    console.error("Error:", error);

    res.status(500).json({ ok: false, message: "Internal server error." });
  }
};
