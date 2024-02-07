import React from "react";

import "../../Styles/Main/MenuPreview.css";

import Pizza from "../../img/pizza.webp";
import Drinks from "../../img/drinks.webp";
import Dessert from "../../img/dessert.webp";

import PreviewBtn from "./MenuPreviewBtn";

const MenuPreview = () => {
  return (
    <div id="menuPrv">
      <p>Можливо вас зацікавить</p>
      <div id="btns">
        <PreviewBtn name="Піца" img={Pizza} link={"#pizzas"} />
        <PreviewBtn name="Напої" img={Drinks} link={"#drinks"} />
        <PreviewBtn name="Десерти" img={Dessert} link={"#deserts"} />
      </div>
    </div>
  );
};
export default MenuPreview;
