import React from "react";
import NavBar from "../Components/NavBar";
import CortItemsList from "../Components/Cort/CortItemsList";
import CortInputs from "../Components/Cort/CortInputs";

const Cort = () => {
  return (
    <>
      <NavBar />
      <main>
        <CortItemsList />
        <CortInputs />
      </main>
    </>
  );
};

export default Cort;
