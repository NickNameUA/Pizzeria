const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Comment = require("./Schemas/CommentSchema");
const Pizza = require("./Schemas/PizzaSchema");

dotenv.config({ path: "index.env" });

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/get/menu", async function (req, res) {
  try {
    await mongoose.connect(process.env.DB_URL);
    const menu = await Pizza.find();
    await mongoose.disconnect();
    res.send(menu).status(200);
  } catch (error) {}
});

app.get("/api/get/comments", async function (req, res) {
  try {
    await mongoose.connect(process.env.DB_URL);
    const comments = await Comment.find();
    res.send(comments).status(200);
    await mongoose.disconnect();
  } catch (error) {}
});

app.post("/api/post/create/comment", async function (req, res) {
  try {
    const comment = new Comment({
      Name: req.body.name,
      StarCount: req.body.starCount,
      Text: req.body.text,
    });

    await mongoose.connect(process.env.DB_URL);
    await comment.save();
    await mongoose.disconnect();
  } catch (error) {}

  res.send("Ok").status(200);
});

app.listen(process.env.PORT, () => {
  console.log("Server started");
});
