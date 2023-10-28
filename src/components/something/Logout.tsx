import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { AiOutlineLogout } from "react-icons/ai";

const Logout = () => {
  return (
    <Box textAlign={"center"}>
      <Button
        color={"lightgrey"}
        fontSize={"18px"}
        display={"flex"}
        gap={"50px"}>
        <span>Log out</span>
        <AiOutlineLogout />
      </Button>
    </Box>
  );
};

export default Logout;
