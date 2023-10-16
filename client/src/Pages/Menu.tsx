import React from "react";
import axios from "axios";

import "../Styles/Menu/MenuList.css";

import MenuItem from "../Components/Menu/MenuItem";
import NavBar from "../Components/NavBar";
import MenuList from "../Components/Menu/MenuList";

const Menu = () => {
  return (
    <>
      <NavBar />
      <MenuList />
    </>
  );
};

export default Menu;
