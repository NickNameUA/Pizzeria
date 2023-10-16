import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import axios from "axios";
const MenuList = () => {
  const [menu, setMenu] = useState([]);
  const getMenu = async () => {
    await axios
      .get("http://localhost:8080/api/get/pizza")
      .then((res) => {
        setMenu(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getMenu();
  });

  return (
    <div id="menuList">
      {menu.map((e: any) => (
        <MenuItem
          key={e.id}
          name={e.name}
          cost={e.cost}
          time={e.time}
          structure={e.structure}
        />
      ))}
    </div>
  );
};

export default MenuList;
