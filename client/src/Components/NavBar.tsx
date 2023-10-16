import React from "react";

import "../Styles/NavBar.css";

import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import GradeIcon from "@mui/icons-material/Grade";
import HomeIcon from "@mui/icons-material/Home";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="NavBar">
      <button>
        <NavLink to="/">
          <HomeIcon className="icon" sx={{ fontSize: 40 }} />
          Головна
        </NavLink>
      </button>
      <button>
        <NavLink to="/menu">
          <LocalPizzaIcon id="pizza" className="icon" sx={{ fontSize: 40 }} />
          Меню
        </NavLink>
      </button>
      <button>
        <NavLink to="#">
          <GradeIcon className="icon" sx={{ fontSize: 40 }} />
          Відгуки
        </NavLink>
      </button>
      <button>
        <NavLink to="#">
          <StorefrontIcon className="icon" sx={{ fontSize: 40 }} />
          Піцеерії
        </NavLink>
      </button>
      <button>
        <NavLink to="#">
          <ShoppingCartIcon className="icon" sx={{ fontSize: 40 }} />
          Кошик
        </NavLink>
      </button>
    </div>
  );
};
export default NavBar;
