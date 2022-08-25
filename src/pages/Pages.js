import React from "react";
import { Route, Routes } from "react-router-dom";
import Cusine from "./Cusine";
import Home from "./Home";
import Recipe from "./Recipe";
import SearchItem from "./SearchItem";

const Pages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cusine />} />
        <Route path="/searched/:search" element={<SearchItem />} />
        <Route path="/recipe/:name" element={<Recipe />} />
      </Routes>
    </>
  );
};

export default Pages;
