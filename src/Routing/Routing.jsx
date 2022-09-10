import React from "react";
import { Routes, Route } from "react-router-dom";
import TopNav from "../Component/NavSection/TopNav";
import Business from "../Pages/Business/Business";
import Health from "../Pages/Health/Health";
import Home from "../Pages/Home/Home";
import Politics from "../Pages/Politics/Politics";
const Routing = () => {
  return (
    <>
    <TopNav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/business" element={<Business />} />
        <Route path="/health" element={<Health />} />
      </Routes>
    </>
  );
};

export default Routing;
