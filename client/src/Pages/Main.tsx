import React from "react";
import NavBar from "../Components/NavBar";
import Description from "../Components/Main/Description";
import MenuPreview from "../Components/Main/MenuPreview";
import Footer from "../Components/Footer";
import ScrollTopBtn from "../Components/ScrollTopBtn";

const Main = () => {
  return (
    <>
      <NavBar />
      <main>
        <Description />
        <MenuPreview />
        <ScrollTopBtn />
      </main>
      <Footer />
    </>
  );
};
export default Main;
