import React from "react";
import NavBar from "../Components/NavBar";
import MenuList from "../Components/Menu/MenuList";
import Footer from "../Components/Footer";
import ScrollTopBtn from "../Components/ScrollTopBtn";

const Menu = () => {
  return (
    <>
      <NavBar />
      <MenuList />
      <ScrollTopBtn />
      <Footer />
    </>
  );
};

export default Menu;
