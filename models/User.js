const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    googleAuth: {
      type: Boolean,
      required: true,
      default: false,
    },
    // Feed topics array
    feed: {
      type: [String],
      required: true,
    },
    savedItems: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Concept",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = { User };
