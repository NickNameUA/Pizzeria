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
    <nav id="NavBar">
      <button>
        <div>
          <HomeIcon className="icon" sx={{ fontSize: 40 }} />
          <NavLink to="/">Головна</NavLink>
        </div>
      </button>
      <button>
        <div>
          <LocalPizzaIcon id="pizza" className="icon" sx={{ fontSize: 40 }} />
          <NavLink to="/menu">Меню</NavLink>
        </div>
      </button>
      <button>
        <div>
          <GradeIcon className="icon" sx={{ fontSize: 40 }} />
          <NavLink to="/comments">Відгуки</NavLink>
        </div>
      </button>
      <button>
        <div>
          <StorefrontIcon className="icon" sx={{ fontSize: 40 }} />
          <NavLink to="/pizzerias">Піцеерії</NavLink>
        </div>
      </button>
      <button>
        <div>
          <ShoppingCartIcon className="icon" sx={{ fontSize: 40 }} />
          <NavLink to="/cort">Кошик</NavLink>
        </div>
      </button>
    </nav>
  );
};
export default NavBar;
