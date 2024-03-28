const TaskModel = require("../models/taskModels");
const { UserModel } = require("../models/userModels");
const mongoose = require("mongoose");

const PostTask = async (req, res) => {
  const { user_id, ...all } = req.body;
  try {
    const tosoPost = await new TaskModel({ owner: user_id, ...all });
    await tosoPost.save();

    const user = await UserModel.findByIdAndUpdate(
      user_id,
      {
        $push: { tasks: tosoPost._id },
      },
      { new: true }
    );

    return res
      .status(200)
      .send({ msg: "Post Task Successfully", data: tosoPost });
  } catch (error) {
    return res
      .status(500)
      .send({ msg: "internal error", error: error.message });
  }
};
const getTask = async (req, res) => {
  const { user_id } = req.body;
  try {
    const projection = {
      tasks: 1,
    };
    const user = await UserModel.findOne({ _id: user_id })
      .select({ tasks: 1, _id: 0 })
      .populate("tasks")
      .exec();

    return res.status(200).send({
      msg: "Get Task Successfully",
      tasks: user.tasks,
    });
  } catch (error) {
    return res
      .status(500)
      .send({ msg: "internal error", error: error.message });
  }
};

const updateTask = async (req, res) => {
  const { taskId } = req.params;
  const { user_id, ...updates } = req.body;
  console.log("updates", updates);

  try {
    const patchTodo = await TaskModel.findByIdAndUpdate(
      { _id: taskId },
      updates,
      { new: true }
    );

    return res.status(200).send({
      msg: "Task Updated Successfully",
      tasks: patchTodo,
    });
  } catch (error) {
    return res
      .status(500)
      .send({ msg: "internal error", error: error.message });
  }
};
const deleteTask = async (req, res) => {
  const { taskId } = req.params;

  try {
    const deleteTodo = await TaskModel.findOneAndDelete({ _id: taskId });

    return res.status(200).send({
      msg: "Task Deleted Successfully",
      tasks: deleteTodo,
    });
  } catch (error) {
    return res
      .status(500)
      .send({ msg: "internal error", error: error.message });
  }
};

module.exports = { PostTask, getTask, updateTask, deleteTask };
