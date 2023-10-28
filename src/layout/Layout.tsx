import { Avatar, Box, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Sidebar";
import Rightbar from "../pages/Rightbar";
import ButtonB from "../components/Element/ButtonB";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import NavbarMobile from "../pages/NavbarMobile";
import Desktop from "../components/device/Desktop";
import Mobile from "../components/device/Mobile";

const Layout = () => {
  const [leftBar, setLeftBar] = useState(true);
  const [rightBar, setRightBar] = useState(true);
  const [navbarMobile, setNavbarMobile] = useState(true);
  const leftBarShow = () => {
    setLeftBar(!leftBar);
  };
  const rightBarShow = () => {
    setRightBar(!rightBar);
  };
  const navbarMobileShow = () => {
    setNavbarMobile(!navbarMobile);
  };
  return (
    <>
      {/* desktop device */}
      <Desktop
        leftBar={leftBar}
        leftBarShow={leftBarShow}
        rightBar={rightBar}
        rightBarShow={rightBarShow}>
        <Outlet />
      </Desktop>

      {/* mobile device */}

      <Mobile>
        <Outlet />
      </Mobile>
    </>
  );
};

export default Layout;
