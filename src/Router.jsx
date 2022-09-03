import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Navigation from "./component/Navigation";
import Location from "./Location";
import Contact from "./Contact";
import Home from "./Home";
import Dashboard from "./Dashboard";
import PrivateRouting from "./PrivateRouting";
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
    {
      lable: "Location",
      path: "/location",
    },
    {
    lable: "status",
    path: "/status",
    },
  ];
  const [userInfo, setUserInfo] = useState(true);


  return (
    <>
      <Navigation navData={navData} />

      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/location" element={<Location />} />
        <Route element={<PrivateRouting auth={userInfo} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        
      </Routes>
    </>
  );
};

export default Router;
