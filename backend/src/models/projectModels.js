const mongoose = require("mongoose");
const ProjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Project = mongoose.model("Project", ProjectSchema);
module.exports = Project;
