import React, { useEffect, useState } from "react";
import getPhoto from "../../photos";
import { Button } from "@mui/material";

interface Props {
  key: any;
  data: any;
}

const MenuItem = (props: Props) => {
  const [added, setAdded] = useState(
    localStorage.getItem(props.data.name) || "false"
  );

  //Створюємо стейт для перевірки елементу на наявність

  const cortChange = () => {
    if (added == "false") {
      localStorage.setItem(props.data.name, "true");
      setAdded("true");
    } else {
      localStorage.setItem(props.data.name, "false");
      setAdded("false");
    }
  };

  //Функція для додавання та вилучання позиції меню з замовлення

  return (
    <div className="menuItem">
      <p>{props.data.name}</p>
      <img src={getPhoto(props.data.name)} />
      <div>
        <p>Ціна: {props.data.cost}$</p>
        <p>Вага: {props.data.weight}г</p>
        {props.data.structure != undefined && (
          <>
            <p>Склад</p>
            <ul>
              {props.data.structure.map((e: string) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div className="btnContainer">
        <Button
          className={added == "false" ? "btn add" : "btn delete"}
          onClick={() => {
            cortChange();
          }}
        >
          {added == "false" ? "Додати до кошика" : "Прибрати з кошика"}
        </Button>
      </div>
    </div>
  );
};

export default MenuItem;
