const mongoose = require("mongoose");

const pizzaSchema = mongoose.Schema({
  Name: String,
  Cost: Number,
  Time: Number,
});

const Pizza = mongoose.model("Pizza", pizzaSchema);

module.exports = Pizza;
