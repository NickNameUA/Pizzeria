const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Pizza = require("./PizzaSchema.js");
const dotenv = require("dotenv");

dotenv.config({ path: "index.env" });

const app = express();

app.use(express.json());
app.use(cors());

const menu = [
  {
    id: 1,
    name: "Пепероні",
    cost: 13,
    time: 24,
    category: "Піцца",
    structure: [
      "Томатний соус",
      "Моцарелла",
      "Салямі італійська",
      "Перець чілі",
    ],
  },
  {
    id: 2,
    name: "Гавайська",
    cost: 17,
    time: 22,
    category: "Піцца",
    structure: ["Томатний соус", "Моцарелла", "Шинка", "Ананас"],
  },
  {
    id: 3,
    name: "Чотири сири",
    cost: 15,
    time: 26,
    category: "Піцца",
    structure: [
      "Соус альфредо",
      "Mоцарелла",
      "Пармезан",
      "Горгонзола",
      "Пекорино",
    ],
  },
  {
    id: 4,
    name: "Вегетаріанська",
    cost: 17,
    time: 25,
    category: "Піцца",
    structure: [
      "Томатний соус",
      "Моцарелла",
      "Паприка",
      "Помідори",
      "Шпинат",
      "Кукурудза",
    ],
  },
  {
    id: 6,
    name: "Гостра",
    cost: 13,
    time: 20,
    category: "Піцца",
    structure: [
      "Гострий томатний cоус",
      "Моцарелла",
      "Перець чилі",
      "Перець халапеньо",
      "Гострі баварські ковбаси",
    ],
  },
  {
    id: 7,
    name: "Чоловіча",
    cost: 13,
    time: 20,
    category: "Піцца",
    structure: [
      "Томатний соус",
      "Моцарелла",
      "Оливки",
      "Салямі",
      "Баварські ковбаси",
      "Шинка",
      "Куряче філе",
    ],
  },
];

app.get("/api/get/pizza", async function (req, res) {
  // await mongoose.connect(process.env.DB_URL);
  // const menu = await Pizza.find();
  res.send(menu).status(200);
  //   await mongoose.disconnect();
});

app.post("/api/post/pizzas", async function (req, res) {
  menu.map((e) => {
    if (e.name == req.body.data) {
      res.send(e).status(200);
    }
  });
  // await mongoose.connect(process.env.DB_URL);
  // const menu = await Pizza.find();
  //   await mongoose.disconnect();
});

app.listen(process.env.PORT, () => {
  console.log("Server started");
});
