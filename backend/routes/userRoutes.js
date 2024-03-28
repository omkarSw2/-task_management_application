const express = require("express");
const { registerUser, LoginUser } = require("../controllers/userControllers");
// const { registerUser } = require("../controllers/auth/userControllers");
const userRouter = express.Router();

userRouter.route("/register").post(registerUser);

userRouter.route("/login").post(LoginUser);

module.exports = { userRouter };
