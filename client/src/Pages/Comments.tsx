import React from "react";
import NavBar from "../Components/NavBar";
import ComentList from "../Components/Comments/ComentList";
import Footer from "../Components/Footer";
import CreateComment from "../Components/Comments/CreateComment";
import ScrollTopBtn from "../Components/ScrollTopBtn";

const Menu = () => {
  return (
    <>
      <NavBar />
      <main>
        <CreateComment />
        <ComentList />
        <ScrollTopBtn />
      </main>
      <Footer />
    </>
  );
};

export default Menu;
