import React, { useEffect, useState } from "react";

import "../..//Styles/Cort/cortItemsList.css";
import CortItem from "./CortItem";
import EmptyCort from "./EmptyCort";
import axios from "axios";

const CortItemsList = () => {
  const [list, setList] = useState(new Set());
  const [load, setLoad] = useState(false);
  const [len, setLen] = useState(document.querySelectorAll(".cortItem").length);
  const [menu, setMenu] = useState() as any;

  //Створюємо необхідні стейти

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

  const arr = new Set();

  if (!load) {
    for (let key in sessionStorage) {
      if (sessionStorage[key] == "true") {
        arr.add(key);
        setList(arr);
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
          if (list.has(e.name)) {
            return <CortItem data={e} key={e._id} />;
          }
        })}
      ;{len == 0 && <EmptyCort />}
    </div>
  );
};
export default CortItemsList;
