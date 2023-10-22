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
    category: "Піца",
    structure: [
      "Томатний соус",
      "Моцарелла",
      "Салямі італійська",
      "Перець чілі",
    ],
    weight: 550,
  },
  {
    id: 2,
    name: "Гавайська",
    cost: 17,
    category: "Піца",
    structure: ["Томатний соус", "Моцарелла", "Шинка", "Ананас"],
    weight: 510,
  },
  {
    id: 3,
    name: "Чотири сири",
    cost: 15,
    category: "Піца",
    structure: [
      "Соус альфредо",
      "Mоцарелла",
      "Пармезан",
      "Горгонзола",
      "Пекорино",
    ],
    weight: 480,
  },
  {
    id: 4,
    name: "Вегетаріанська",
    cost: 17,
    category: "Піца",
    structure: [
      "Томатний соус",
      "Моцарелла",
      "Паприка",
      "Помідори",
      "Шпинат",
      "Кукурудза",
    ],
    weight: 470,
  },
  {
    id: 6,
    name: "Гостра",
    cost: 13,
    category: "Піца",
    structure: [
      "Гострий томатний cоус",
      "Моцарелла",
      "Перець чилі",
      "Перець халапеньо",
      "Гострі баварські ковбаси",
    ],
    weight: 590,
  },
  {
    id: 7,
    name: "Чоловіча",
    cost: 13,
    category: "Піца",
    structure: [
      "Томатний соус",
      "Моцарелла",
      "Оливки",
      "Салямі",
      "Баварські ковбаси",
      "Шинка",
      "Куряче філе",
    ],
    weight: 600,
  },
  {
    id: 8,
    name: "Coca-Cola",
    cost: 3,
    category: "Напій",
    weight: 330,
  },
  {
    id: 9,
    name: "Coca-Cola:Zero",
    cost: 3,
    category: "Напій",
    weight: 330,
  },
  {
    id: 10,
    name: "Pepsi",
    cost: 3.5,
    category: "Напій",
    weight: 500,
  },
  {
    id: 11,
    name: "Pepsi:Zero",
    cost: 3.8,
    category: "Напій",
    weight: 330,
  },
  {
    id: 12,
    name: "Fanta",
    cost: 2.7,
    category: "Напій",
    weight: 330,
  },
  {
    id: 13,
    name: "Fanta:Shokata",
    cost: 3,
    category: "Напій",
    weight: 500,
  },
  {
    id: 14,
    name: "Non Stop:Original",
    cost: 5,
    category: "Напій",
    weight: 500,
  },
  {
    id: 15,
    name: "Non Stop:Jungle",
    cost: 4,
    category: "Напій",
    weight: 500,
  },
  {
    id: 16,
    name: "Non Stop:Boost",
    cost: 5,
    category: "Напій",
    weight: 500,
  },
  {
    id: 17,
    name: "Non Stop:Ultra",
    cost: 5,
    category: "Напій",
    weight: 500,
  },
  {
    id: 18,
    name: "Monster",
    cost: 5,
    category: "Напій",
    weight: 500,
  },
  {
    id: 19,
    name: "Monster:Ultra V",
    cost: 5,
    category: "Напій",
    weight: 500,
  },
  {
    id: 20,
    name: "Monster:Pacific",
    cost: 5,
    category: "Напій",
    weight: 500,
  },
  {
    id: 21,
    name: "Monster:MIXXO",
    cost: 5,
    category: "Напій",
    weight: 500,
  },
  {
    id: 22,
    name: "Моршинська",
    cost: 2,
    category: "Напій",
    weight: 500,
  },
  {
    id: 23,
    name: "Баварія",
    cost: 20,
    category: "Піца",
    weight: 660,
    structure: [
      "Перетерті томати",
      "Моцарела",
      "Мисливські та домашні ковбаски",
      "Гірчиця",
      "Свіжі печериці",
    ],
  },
  {
    id: 24,
    name: "Морська піца",
    cost: 23,
    category: "Піца",
    weight: 460,
    structure: [
      "Моцарелла",
      "Kреветки",
      "Kальмари",
      "Mаринована синя цибуля",
      "Mідії",
      "Tрюфельний соус",
    ],
  },
  {
    id: 25,
    name: "Піца з беконом",
    cost: 15,
    category: "Піца",
    weight: 530,
    structure: [
      "Моцарела",
      "Гливи",
      "Білі гриби",
      "Бекон",
      "Пармезан",
      "Трюфельний соус",
    ],
  },
  {
    id: 26,
    name: "Чотири м'яса",
    cost: 17,
    category: "Піца",
    weight: 550,
    structure: [
      "Перетерті томати",
      "Моцарела",
      "Бекон",
      "Маринована синя цибуля",
      "Куряче філе су-від",
      "Мисливські ковбаски",
      "Прошуто кото",
    ],
  },
  {
    id: 27,
    name: "Пірожине «Ф'южн»",
    cost: 1.2,
    category: "Десерт",
    weight: 100,
    structure: [
      "Класичні медові коржі",
      "Курага",
      "Чорнослив",
      "Грецький горіх",
      "Фундук",
      "Карамель",
      "Молочний шоколад",
    ],
  },
  {
    id: 28,
    name: "Пірожине «Валентинка»",
    cost: 1.3,
    category: "Десерт",
    weight: 90,
    structure: [
      "Ванільний бісквіт",
      "Ванільний сироп",
      "Вершково-малиновий крем",
      "Крем сирний",
      "Малинова начинка",
      "Білий шоколад",
      "Гель",
    ],
  },
  {
    id: 29,
    name: "Пірожине «Амаренно»",
    cost: 1.6,
    category: "Десерт",
    weight: 110,
    structure: [
      "Шоколадний бісквіт",
      "Ванільний сироп",
      "Зефір з чорного шоколаду",
      "Вишневе желе",
      "Праліне",
    ],
  },
  {
    id: 30,
    name: "Пірожине «Бджілка»",
    cost: 1,
    category: "Десерт",
    weight: 60,
    structure: [
      "Шоколадний бісквіт",
      "Медовий бісквіт",
      "Вершковий крем",
      "Вишнева начинка",
      "Молочний шоколад",
      "Гель",
    ],
  },
  {
    id: 31,
    name: "Пірожине «Сонечко»",
    cost: 1.1,
    category: "Десерт",
    weight: 60,
    structure: [
      "Шоколадний бісквіт",
      "Вершковий крем",
      "Шоколадний крем",
      "Вишнева начинка",
      "Молочний шоколад",
      "Гель",
    ],
  },
  {
    id: 32,
    name: "Пірожине «Зайчик»",
    cost: 1,
    category: "Десерт",
    weight: 65,
    structure: [
      "Ванільний бісквіт",
      "Ванільний сироп",
      "Вершковий крем",
      "Персикова начинка",
      "Молочний шоколад",
      "Гель",
    ],
  },
  {
    id: 33,
    name: "Пірожине «Жабка»",
    cost: 1.3,
    category: "Десерт",
    weight: 80,
    structure: [
      "Ванільний сироп",
      "Сирний крем",
      "Полунична начинка",
      "Молочний шоколад",
      "Гель",
    ],
  },
  {
    id: 34,
    name: "Чіз-кейк",
    cost: 1.7,
    category: "Десерт",
    weight: 110,
    structure: [
      "Крекери",
      "Вершкове масло",
      "Сметана(30%)",
      "Лимонна цедра",
      "Лимонний сок",
      "Полуниця",
    ],
  },
  {
    id: 35,
    name: "Сакура-Пай",
    cost: 2,
    category: "Десерт",
    weight: 200,
    structure: ["Рікотта домашня", "Шоколад", "Вишневий конфітюр"],
  },
  {
    id: 36,
    name: "Тірамісу",
    cost: 1.5,
    category: "Десерт",
    weight: 100,
    structure: ["Бісквіт", "Сир", "Кавовий лікер", "Ром"],
  },
  {
    id: 37,
    name: "Діабло",
    cost: 14,
    category: "Піца",
    structure: [
      "Томатний соус",
      "Моцарелла",
      "Пармезан",
      "Зелень",
      "Печериці свіжі",
      "Перець чилі",
      "Гостре салямі",
    ],
    weight: 520,
  },
  {
    id: 38,
    name: "Капрічоза",
    cost: 12,
    category: "Піца",
    structure: [
      "Соус",
      "Моцарелла",
      "Шинка",
      "Печериці свіжі",
      "Каперси",
      "Зелень",
      "Пармезан",
    ],
    weight: 460,
  },
  {
    id: 39,
    name: "Карбонара",
    cost: 11,
    category: "Піца",
    structure: [
      "Вершковий соус",
      "Моцарелла",
      "Бекон",
      "Перепелині яйця",
      "Зелень",
      "Пармезан",
    ],
    weight: 480,
  },
  {
    id: 40,
    name: "Піца Фрі",
    cost: 13,
    category: "Піца",
    structure: [
      "Вершковий соус",
      "Моцарелла",
      "Картопля фрі",
      "Салямі",
      "Помідори",
      "Базелік",
      "Пармезан",
    ],
    weight: 490,
  },
  {
    id: 41,
    name: "Маргаритта",
    cost: 14,
    category: "Піца",
    structure: ["Cоус", "Сир", "Помідор", "Моцарела", "Зелень", "Пармезан"],
    weight: 420,
  },
];

const comments = [
  {
    id: 1,
    name: "Богдан Тирон",
    starCount: 5,
    text: "Все сподобалось. Піца супер",
  },
  {
    id: 2,
    name: "Марія Гончарюк",
    starCount: 4,
    text: "Все чудово, але десерти занадто солодкі",
  },
  {
    id: 3,
    name: "Оксана Радиш",
    starCount: 4,
    text: "Обпеклася кавою, а так все смачно",
  },
  {
    id: 4,
    name: "Микола Франюк",
    starCount: 5,
    text: "Замовлення прийшло за 12хв",
  },
];

app.get("/api/get/menu", async function (req, res) {
  // await mongoose.connect(process.env.DB_URL);
  // const menu = await Pizza.find();
  res.send(menu).status(200);
  //   await mongoose.disconnect();
});

app.post("/api/post/menu/item", async function (req, res) {
  menu.map((e) => {
    if (e.name == req.body.data) {
      res.send(e).status(200);
    }
  });
  // await mongoose.connect(process.env.DB_URL);
  // const menu = await Pizza.find();
  //   await mongoose.disconnect();
});

app.get("/api/get/comments", async function (req, res) {
  // await mongoose.connect(process.env.DB_URL);
  // const menu = await Pizza.find();
  res.send(comments).status(200);
  //   await mongoose.disconnect();
});
app.listen(process.env.PORT, () => {
  console.log("Server started");
});
