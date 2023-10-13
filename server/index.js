const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Pizza = require("./PizzaSchema.js");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/get/pizza", async function (req, res) {
  await mongoose.connect(process.env.DB_URL);
  const menu = await Pizza.find();

  res.send(menu).status(200);
  await mongoose.disconnect();
});

app.post("/api/post/pizza", async function (req, res) {
  await mongoose.connect(process.env.DB_URL);
  const pizza = new Pizza({
    name: req.body.name,
    cost: req.body.cost,
    time: req.body.time,
  });

  await pizza.save();
  await mongoose.disconnect();

  res.send({ message: "all is ok" }).status(200);
});

app.listen(process.env.PORT, () => {
  console.log("Server started");
});
