import React, { useEffect, useState } from "react";
import getPhoto from "../photos";
import { Button } from "@mui/material";

interface Props {
  key: any;
  data: any;
}

const MenuItem = (props: Props) => {
  const [photo, setPhoto] = useState(getPhoto(props.data.name));
  const [added, setAdded] = useState(
    localStorage.getItem(props.data.name) || "false"
  );
  const cortChange = () => {
    if (added == "false") {
      localStorage.setItem(props.data.name, "true");
      setAdded("true");
    } else {
      localStorage.setItem(props.data.name, "false");
      setAdded("false");
    }
  };
  return (
    <div className="menuItem">
      <p>{props.data.name}</p>
      <img src={photo} />
      <div>
        <p>Ціна: {props.data.cost}$</p>
        <p>Вага: {props.data.weight}г</p>
        {props.data.structure != undefined && (
          <>
            <p>Склад</p>
            <ul>
              {props.data.structure.map((e: string) => (
                <li>{e}</li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div id="btnContainer">
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
