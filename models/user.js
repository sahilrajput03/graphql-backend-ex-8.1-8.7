const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
  },
  //commenting is allowed here..!!
  // friends: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Person",
  //   },
  // ],
});

module.exports = mongoose.model("User", schema);
