import React from "react";
import NavBar from "../Components/NavBar";
import Description from "../Components/Description";
import MenuPreview from "../Components/MenuPreview";
import Footer from "../Components/Footer";
import SharesList from "../Components/SharesList";

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
