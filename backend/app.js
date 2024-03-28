const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.status(200).send({ msg: "Success to get the data" });
  } catch (error) {
    res.status(400).send({ msg: "Error while geting the data.", error });
  }
});

//routes import

const { userRouter } = require("./routes/userRoutes");
const { TaskRoutes } = require("./routes/taskRoutes");

// Routes Declaration
app.use("/v1/users", userRouter);
app.use("/v1/task", TaskRoutes);

module.exports = { app };
