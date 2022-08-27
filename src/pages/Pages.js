import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Cusine from "./Cusine";
import Home from "./Home";
import Recipe from "./Recipe";
import SearchItem from "./SearchItem";
import { AnimatePresence } from "framer-motion";
const Pages = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.path}>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cusine />} />
          <Route path="/searched/:search" element={<SearchItem />} />
          <Route path="/recipe/:name" element={<Recipe />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default Pages;
