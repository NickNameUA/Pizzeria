import React, { useEffect, useMemo, useState } from "react";
import getPhoto from "../photos";
import { Button } from "@mui/material";
import axios from "axios";
const url = process.env.SERVER_URL;

interface Props {
  name: string;
}

const CortItem = (props: Props) => {
  const [photo, setPhoto] = useState(getPhoto(props.name));
  const [data, setData] = useState("") as any;
  const [count, setCount] = useState(1);
  const [isDel, setIsDel] = useState(false);
  //Створення необхідний стейтів
  const getItem = async () => {
    await axios
      .post("https://inst-test-9c942bc3025d.herokuapp.com/api/post/menu/item", {
        data: props.name,
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };
  if (data == "") {
    getItem();
  }
  //Отримання інформації про позицію меню з сервера

  const cortDelete = () => {
    localStorage.removeItem(props.name);
    setIsDel(true);
  };
  //Видалення позиції менб з замовлення

  return (
    <div className={isDel ? "deletedItem" : "cortItem"}>
      <div className="preVeiw">
        <p>{props.name}</p>
        <img src={photo} />
        <p>Кількість</p>
        <div className="countBtns">
          <button
            disabled={count < 2 ? true : false}
            onClick={() => {
              setCount(count - 1);
            }}
          >
            -
          </button>
          <p>{count}</p>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +
          </button>
        </div>
        <span>
          Ціна:
          <p className="cost">
            {data != undefined && (data.cost * count).toFixed(1)}
          </p>
          $
        </span>
      </div>
      <div className="desc">
        {data != undefined && data.structure != undefined && (
          <>
            <p>Склад</p>
            <ul id="ul">
              {data.structure != undefined &&
                data.structure.map((e: string) => <li key={e}>{e}</li>)}
            </ul>
          </>
        )}
        <p>Вага: {data != undefined && data.weight}г</p>
        <Button
          className="delete"
          onClick={() => {
            cortDelete();
          }}
        >
          Прибрати з кошика
        </Button>
      </div>
    </div>
  );
};

export default CortItem;
