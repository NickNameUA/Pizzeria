import React, { useEffect, useState } from "react";
import Photos from "../photos";
import { Button } from "@mui/material";

interface Props {
  key: number;
  name: string;
  cost: number;
  time: number;
  structure: any;
}

const MenuItem = (props: Props) => {
  const [photo, setPhoto] = useState();
  const [added, setAdded] = useState(
    localStorage.getItem(props.name) || "false"
  );
  useEffect(() => {
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
  });
  const cortChange = () => {
    if (added == "false") {
      localStorage.setItem(props.name, "true");
      setAdded("true");
    } else {
      localStorage.setItem(props.name, "false");
      setAdded("false");
    }
  };

  return (
    <div className="menuItem">
      <p>{props.name}</p>
      <img src={photo} />
      <div>
        <p>Ціна: {props.cost}$</p>
        <p>Склад</p>
        <ul>
          {props.structure.map((e: string) => (
            <li>{e}</li>
          ))}
        </ul>
      </div>
      <div id="btnContainer">
        <Button>Купити</Button>
        <Button
          className={added == "false" ? "add" : "delete"}
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
