import React from "react";

import "../Styles/NavBar.css";

import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import GradeIcon from "@mui/icons-material/Grade";

const NavBar = () => {
  return (
    <div id="NavBar">
      <button>
        <div>
          <LocalPizzaIcon id="pizza" className="icon" sx={{ fontSize: 40 }} />
          Меню
        </div>
      </button>
      <button>
        <div>
          <GradeIcon className="icon" sx={{ fontSize: 40 }} />
          Відгуки
        </div>
      </button>
      <button>
        <div>
          <StorefrontIcon className="icon" sx={{ fontSize: 40 }} />
          Піцеерії
        </div>
      </button>
      <button>
        <div>
          <ShoppingCartIcon className="icon" sx={{ fontSize: 40 }} />
          Кошик
        </div>
      </button>
    </div>
  );
};
export default NavBar;
