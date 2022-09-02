import React from 'react'
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Navigation from "./component/Navigation";
import Contact from "./Contact";
import Home from "./Home";
const Router = () => {
  return (
    <>
    <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
    </>
  )
}

export default Router