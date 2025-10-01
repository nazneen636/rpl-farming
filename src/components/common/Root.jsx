import React from "react";
import Nav from "./Nav";
import { Outlet } from "react-router";
import Footer from "./Footer";

const Root = () => {
  return (
    <div className="relative">
      <Nav />
      <Outlet />
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Root;
