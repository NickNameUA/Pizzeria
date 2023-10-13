import React from "react";

import "../Styles/MenuPreview.css";
import { Button } from "@mui/material";
import Pizza from "../img/pizza.png";
import Drinks from "../img/drinks.png";
import Dessert from "../img/dessert.png";

const MenuPreview = () => {
  return (
    <div id="menuPrv">
      <p>Можливо вас зацікавить</p>
      <div id="btns">
        <div>
          <Button>
            <img src={Pizza} alt="Pizza" />
          </Button>
          <p>Піцца</p>
        </div>
        <div>
          <Button>
            <img src={Drinks} alt="Drinks" />
          </Button>
          <p>Напої</p>
        </div>
        <div>
          <Button>
            <img src={Dessert} alt="Dessert" />
          </Button>
          <p>Десерти</p>
        </div>
      </div>
    </div>
  );
};
export default MenuPreview;
