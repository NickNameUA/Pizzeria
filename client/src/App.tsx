import React from "react";
import { Route, Routes } from "react-router-dom";

import Menu from "./Pages/Menu";
import Main from "./Pages/Main";
import Cort from "./Pages/Cort";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cort" element={<Cort />} />
      </Routes>
    </>
  );
};
export default App;
