import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Navigation from "./component/Navigation";
import Contact from "./Contact";
import Home from "./Home";
const Router = () => {
  const navData = [
    {
      lable: "Home",
      path: "/",
    },
    {
      lable: "Contact",
      path: "/contact",
    },
    {
      lable: "About us",
      path: "/about-us",
    },
  ];
  const navDatas = [
    {
      lable: "Blog",
      path: "/",
    },
    {
      lable: "Hello",
      path: "/contact",
    },
    {
      lable: "we are",
      path: "/about-us",
    },
  ];

  return (
    <>
      <Navigation navData={navData} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
        <Route path="*" element={"Page not found"} />
      </Routes>
    </>
  );
};

export default Router;
