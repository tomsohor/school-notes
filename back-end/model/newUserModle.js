const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newUserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: false },
  password: { type: String, required: false },
  dob: { type: Date },
  gender: { type: String, required: false },
});

const newUser = mongoose.model("newUser", newUserSchema);

module.exports = newUser;
