const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  Name: String,
  StarCount: Number,
  Text: String,
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
