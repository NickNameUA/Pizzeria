import React, { useEffect, useState } from "react";
import axios from "axios";

import "../../Styles/Menu/MenuList.css";

import MenuItem from "./MenuItem";
import MenuNav from "./MenuNav";

const getCtg = () => {
  const link = window.location.href;
  const index = window.location.href.indexOf("#");
  return link.slice(index + 7) || "all";
};

//Функція отримання категорії

const MenuList = () => {
  const [menu, setMenu] = useState("") as any;
  const [ctg, setCtg] = useState(getCtg());
  //Створюємо необхідні стейти

  const getMenu = async () => {
    await axios
      .get("https://inst-test-9c942bc3025d.herokuapp.com/api/get/menu")
      .then(async (res) => {
        await setMenu(res.data);
      })
      .catch((err) => console.log(err));
  };

  const getMenuCtg = (category: string, title: string, arr: Array<any>) => {
    if (ctg == category || ctg == "all") {
      return (
        <>
          <h2>{title}</h2> {arr}
        </>
      );
    }
  };

  //Елемент меню

  useEffect(() => {
    if (menu == "") {
      getMenu();
      //Отримуємо меню з сервера
    }
  });

  const pizzas = [] as any;
  const deserts = [] as any;
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
        e.category == "Піца" && pizzas.push(<MenuItem key={e._id} data={e} />);
        e.category == "Напій" && drinks.push(<MenuItem key={e._id} data={e} />);
        e.category == "Десерт" &&
          deserts.push(<MenuItem key={e._id} data={e} />);
      });

  //Сортуємо меню по категоріях і назві
  return (
    <main id="menuList">
      <MenuNav setState={setCtg} />
      {getMenuCtg("pizzas", "Піца", pizzas)}
      {getMenuCtg("drinks", "Напої", drinks)}
      {getMenuCtg("deserts", "Десерти", deserts)}
    </main>
  );
};

export default MenuList;
