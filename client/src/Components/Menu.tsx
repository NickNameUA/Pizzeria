import React from "react";
import MenuItem from "./MenuItem";
import axios from "axios";

const Menu = () => {
  async () => {
    await axios.get("https://localhost:8000/api/get/pizza").then((res) => {
      console.log(res.data);
    });
  };
  return <MenuItem />;
};

export default Menu;
