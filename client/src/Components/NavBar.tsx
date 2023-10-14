import React from "react";

import "../Styles/NavBar.css";

import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import GradeIcon from "@mui/icons-material/Grade";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="NavBar">
      <button>
        <NavLink to="menu">
          <LocalPizzaIcon id="pizza" className="icon" sx={{ fontSize: 40 }} />
          Меню
        </NavLink>
      </button>
      <button>
        <NavLink to="menu">
          <GradeIcon className="icon" sx={{ fontSize: 40 }} />
          Відгуки
        </NavLink>
      </button>
      <button>
        <NavLink to="menu">
          <StorefrontIcon className="icon" sx={{ fontSize: 40 }} />
          Піцеерії
        </NavLink>
      </button>
      <button>
        <NavLink to="menu">
          <ShoppingCartIcon className="icon" sx={{ fontSize: 40 }} />
          Кошик
        </NavLink>
      </button>
    </div>
  );
};
export default NavBar;
