const { UserModel } = require("../models/userModels");

const generateAccessTokens = async (userId) => {
  try {
    const user = await UserModel.findById(userId);

    const accessToken = user.generateAccessToken();

    return { accessToken };
  } catch (error) {
    return {
      msg: "Something went wrong while generating the access token",
    };
  }
};

const registerUser = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, password } = req.body;
    const existedUser = await UserModel.findOne({
      $or: [{ username }, { email }],
    });

    if (existedUser) {
      return res
        .status(401)
        .send({ msg: "User with email or username already exists" });
    }
    const newUser = await UserModel({ username, email, password });
    await newUser.save();

    return res
      .status(201)
      .send({ status: true, msg: "New user Created", user: newUser });
  } catch (error) {
    return res.status(500).send({
      status: false,
      msg: "Error in user registration",
      error: error.message,
    });
  }
};

const LoginUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existedUser = await UserModel.findOne({
      $or: [{ username }, { email }],
    });

    if (!existedUser) {
      return res.status(404).send({
        msg: "User with email or username do not exists please  sign up.",
      });
    }

    const isPasswordValid = await existedUser.isPasswordCorrect(password);

    if (!isPasswordValid) {
      return res.status(401).send({ msg: "Invalid Password" });
    }

    const { accessToken } = await generateAccessTokens(existedUser._id);

    return res.status(200).send({
      msg: " User logged in successfully",
      user: existedUser,
      accessToken,
    });
  } catch (error) {
    return res.status(500).send({ msg: "Server Error", error: error.message });
  }
};

module.exports = { registerUser, LoginUser };
