import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import ProfileBar from "../Profile/ProfileBar";
import AppearanceSuggested from "../Suggested/AppearanceSuggested";
import Footer from "../Footer/Footer";

const RightBarList = () => {
  return (
    <>
      <ProfileBar />
      <AppearanceSuggested />
      <Footer />
    </>
  );
};

export default RightBarList;
