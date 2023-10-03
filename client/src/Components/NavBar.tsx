import React from "react";

import "../Styles/NavBar.css";

import Logo from "../img/Logo.png";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import KitchenIcon from "@mui/icons-material/Kitchen";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const NavBar = () => {
  return (
    <div id="NavBar">
      <div>
        <img src={Logo} />
        <p>Pizza from italia</p>
      </div>
      <button>
        <div>
          <KitchenIcon className="icon" sx={{ fontSize: 30 }} />
          Все
        </div>
      </button>
      <button>
        <div>
          <LocalPizzaIcon className="icon" id="pizza" sx={{ fontSize: 30 }} />
          Піцци
        </div>
      </button>
      <button>
        <div>
          <LocalDrinkIcon className="icon" sx={{ fontSize: 30 }} />
          Напої
        </div>
      </button>
      <button>
        <div>
          <ShoppingCartIcon className="icon" sx={{ fontSize: 30 }} />
          Кошик
        </div>
      </button>
    </div>
  );
};
export default NavBar;
