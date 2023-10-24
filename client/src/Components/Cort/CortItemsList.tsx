import React, { useEffect, useState } from "react";

import "../..//Styles/Cort/cortItemsList.css";
import CortItem from "./CortItem";
import EmptyCort from "./EmptyCort";
import axios from "axios";

const CortItemsList = () => {
  const [list, setList] = useState<string[]>([]);
  const [load, setLoad] = useState(false);
  const [len, setLen] = useState(document.querySelectorAll(".cortItem").length);
  const [menu, setMenu] = useState() as any;
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
    if (menu == undefined) {
      getMenu();
    }
  });

  //Отримуємо меню з сервера

  //Створення необхідний стейтів

  const arr = [] as any;

  if (!load) {
    for (let key in localStorage) {
      if (localStorage[key] == "true") {
        if (!arr.includes(key)) {
          arr.push(key);
          setList(arr);
        }
      }
    }
    setLoad(true);
  }
  //Наповнення списку за допомогою сесії
  setInterval(() => {
    if (len != document.querySelectorAll(".cortItem").length) {
      setLen(document.querySelectorAll(".cortItem").length);
    }
  }, 1);
  //Перевірка наявності позицій меню у замовленні

  return (
    <div id="cortItemsList">
      {menu != undefined &&
        menu.map((e: any) => {
          if (list.includes(e.name)) {
            return <CortItem data={e} key={e._id} />;
          }
        })}
      ;{len == 0 && <EmptyCort />}
    </div>
  );
};
export default CortItemsList;
