import React from "react";
import Main from "./Pages/Main";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="menu" element={<Main />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
