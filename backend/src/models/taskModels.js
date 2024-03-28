const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    due_date: { type: Date, default: Date.now()},
    priority: Number,
    completed: Boolean,

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const TaskModel = mongoose.model("Task", taskSchema);
module.exports = TaskModel;
