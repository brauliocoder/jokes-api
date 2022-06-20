const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
  setup: {
    type: String,
    required: [true, "Setup is required"],
    minlength: [10, "Setup must be at leat 10 characters long"]
  },
  punchline: {
    type: String,
    required: [true, "Punchline is required"],
    minlength: [3, "Punchline must be at leat 3 characters long"]
  }
});

module.exports = mongoose.model("Joke", JokeSchema);
