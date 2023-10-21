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
  if (menu == "") {
    getMenu();
  }
  //Отримуємо меню з сервера

  return (
    <div id="menuList">
      <h1>Піци</h1>
      {menu != "" &&
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
          .map(
            (e: any) => e.category == "Піца" && <MenuItem key={e.id} data={e} />
          )}
      <h1>Напої</h1>
      {menu != "" &&
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
          .map(
            (e: any) =>
              e.category == "Напій" && <MenuItem key={e.id} data={e} />
          )}
      <h1>Десерти</h1>
      {menu != "" &&
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
          .map(
            (e: any) =>
              e.category == "Десерт" && <MenuItem key={e.id} data={e} />
          )}
    </div>
  );
};

export default MenuList;
