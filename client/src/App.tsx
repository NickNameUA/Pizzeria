import React from "react";
import { Route, Routes } from "react-router-dom";

import Menu from "./Pages/Menu";
import Main from "./Pages/Main";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </>
  );
};
export default App;
