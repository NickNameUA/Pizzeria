import React, { useEffect, useState } from "react";
import axios from "axios";

import "../../Styles/Menu/MenuList.css";

import MenuItem from "./MenuItem";

const MenuList = () => {
  const [menu, setMenu] = useState("") as any;

  //Створюємо стейт для меню

  const getMenu = async () => {
    await axios
      .get("https://inst-test-9c942bc3025d.herokuapp.com/api/get/menu")
      .then((res) => {
        setMenu(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (menu == "") {
      getMenu();
    }
  });

  //Отримуємо меню з сервера

  const pizza = [] as any;
  const desert = [] as any;
  const drinks = [] as any;

  menu != "" &&
    menu
      .sort((a: any, b: any) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      })
      .map((e: any) => {
        e.category == "Піца" && pizza.push(<MenuItem key={e._id} data={e} />);
        e.category == "Напій" && drinks.push(<MenuItem key={e._id} data={e} />);
        e.category == "Десерт" &&
          desert.push(<MenuItem key={e._id} data={e} />);
      });

  //Сортуємо меню по категоріях і назві
  return (
    <main id="menuList">
      <h2>Піци</h2>
      {pizza}
      <h2>Напої</h2>
      {drinks}
      <h2>Десерти</h2>
      {desert}
    </main>
  );
};

export default MenuList;
