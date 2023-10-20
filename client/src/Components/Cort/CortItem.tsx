import React, { useEffect, useMemo, useState } from "react";
import Photos from "../photos";
import { Button } from "@mui/material";
import axios from "axios";

interface Props {
  name: string;
}

const CortItem = (props: Props) => {
  const [photo, setPhoto] = useState();
  const [data, setData] = useState() as any;
  const [count, setCount] = useState(1) as any;

  if (photo == undefined) {
    switch (props.name) {
      case "Пепероні":
        setPhoto(Photos.peperoni);
        break;
      case "Гавайська":
        setPhoto(Photos.hawaii);
        break;
      case "Чотири сири":
        setPhoto(Photos.forCheases);
        break;
      case "Вегетаріанська":
        setPhoto(Photos.vegetables);
        break;
      case "Гостра":
        setPhoto(Photos.spicy);
        break;
      case "Чоловіча":
        setPhoto(Photos.manPizza);
        break;
    }
  }

  useEffect(() => {
    if (data == undefined) {
      getMenu();
    }
  });
  const getMenu = async () => {
    await axios
      .post("http://localhost:8080/api/post/pizzas", {
        data: props.name,
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const cortDelete = () => {
    localStorage.removeItem(props.name);
  };

  return (
    <div className={"cortItem"}>
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
          Ціна: <p className="cost">{data != undefined && data.cost * count}</p>
          $
        </span>
      </div>
      <div className="desc">
        <p>Склад</p>
        <ul>
          {data != undefined &&
            data.structure.map((e: string) => <li key={e}>{e}</li>)}
        </ul>

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
