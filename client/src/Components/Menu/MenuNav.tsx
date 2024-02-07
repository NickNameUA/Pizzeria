import React, { useState } from "react";

import "../../Styles/Menu/MenuNav.css";
import { Button } from "@mui/material";

interface Props {
  setState: Function;
}

const MenuNav = (props: Props) => {
  return (
    <menu id="menuNav">
      <h2>Оберіть категорію</h2>
      <div>
        <Button onClick={() => props.setState("all")}>Все</Button>
        <Button onClick={() => props.setState("pizzas")}>Піци</Button>
        <Button onClick={() => props.setState("drinks")}>Напої</Button>
        <Button onClick={() => props.setState("deserts")}>Десерти</Button>
      </div>
    </menu>
  );
};

export default MenuNav;
