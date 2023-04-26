import React from "react";
import Homescreen from "../src/components/homescreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import View from "../src/components/view";
const app = () => {
  return (
    // <div>
    //   <Homescreen />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homescreen />} />

        <Route path="/view" element={<View />} />
      </Routes>
    </BrowserRouter>
  );
};
export default app;
