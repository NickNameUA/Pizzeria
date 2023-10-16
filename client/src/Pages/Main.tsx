import React from "react";
import NavBar from "../Components/NavBar";
import Description from "../Components/Main/Description";
import MenuPreview from "../Components/Main/MenuPreview";
import Footer from "../Components/Footer";
import SharesList from "../Components/Main/SharesList";

const Main = () => {
  return (
    <>
      <NavBar /> <Description />
      <MenuPreview /> <SharesList />
      <Footer />
    </>
  );
};
export default Main;
