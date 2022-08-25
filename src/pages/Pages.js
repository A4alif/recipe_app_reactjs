import React from "react";
import { Route, Routes } from "react-router-dom";
import Cusine from "./Cusine";
import Home from "./Home";

const Pages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cusine />} />
      </Routes>
    </>
  );
};

export default Pages;
