import React from "react";
import NavBar from "../Components/NavBar";
import ComentList from "../Components/Comments/ComentList";
import Footer from "../Components/Footer";
import CreateComment from "../Components/Comments/CreateComment";

const Menu = () => {
  return (
    <>
      <NavBar />
      <CreateComment />
      <ComentList />
      <Footer />
    </>
  );
};

export default Menu;
