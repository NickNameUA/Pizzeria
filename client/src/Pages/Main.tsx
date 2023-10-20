import React from "react";
import NavBar from "../Components/NavBar";
import Description from "../Components/Main/Description";
import MenuPreview from "../Components/Main/MenuPreview";
import Footer from "../Components/Footer";

const Main = () => {
  return (
    <>
      <NavBar /> <Description />
      <MenuPreview />
      <Footer />
    </>
  );
};
export default Main;
