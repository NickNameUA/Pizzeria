import React, { useEffect, useState } from "react";
import getPhoto from "../../photos";
import { Button } from "@mui/material";
import axios from "axios";

interface Props {
  data: any;
  key: any;
}

const CortItem = (props: Props) => {
  const [photo, setPhoto] = useState(getPhoto(props.data.name));
  const [count, setCount] = useState(1);
  const [isDel, setIsDel] = useState(false);
  //Створення необхідний стейтів

  const cortDelete = () => {
    localStorage.removeItem(props.data.name);
    setIsDel(true);
  };
  //Видалення позиції менб з замовлення

  return (
    <div className={isDel ? "deletedItem" : "cortItem"}>
      <div className="preVeiw">
        <p>{props.data.name}</p>
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
            {props.data != undefined && (props.data.cost * count).toFixed(1)}
          </p>
          $
        </span>
      </div>
      <div className="desc">
        {props.data != undefined && props.data.structure != undefined && (
          <>
            <p>Склад</p>
            <ul>
              {props.data.structure != undefined &&
                props.data.structure.map((e: string) => <li key={e}>{e}</li>)}
            </ul>
          </>
        )}
        <p>Вага: {props.data != undefined && props.data.weight}г</p>
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
