const express = require("express");
const {
  PostTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskControllers");
const { verifyJWT } = require("../middlewares/authMiddleware");

const TaskRoutes = express.Router();

TaskRoutes.route("/").get(verifyJWT, getTask);
TaskRoutes.route("/addtask").post(verifyJWT, PostTask);
TaskRoutes.route("/updatetask/:taskId").patch(verifyJWT, updateTask);
TaskRoutes.route("/deletetask/:taskId").delete(verifyJWT, deleteTask);

module.exports = { TaskRoutes };
