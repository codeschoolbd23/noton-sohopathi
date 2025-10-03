import React from "react";
import { Outlet } from "react-router-dom";
import FooterNav from "../../shared/FootBar/FooterNav";
import SubNav from './../../shared/NavigationBar/SubNav';
import Nav from "../../shared/NavigationBar/Nav";
const Main = () => {
  return (
    <div data-theme="acid h-screen">
      <div className="w-full">
        <SubNav />
      </div>
      <div className="sticky top-0 z-50 w-full">
        <Nav />
      </div>
      <div className="w-full">
        <Outlet />
      </div>
      <div className="w-full">
        <FooterNav />
      </div>
    </div>
  );
};

export default Main;
