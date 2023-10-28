import { Box, List, ListItem } from "@chakra-ui/react";
import React from "react";
import Rightbar from "./Rightbar";

type TNProps = {
  onClick?: () => void;
};

const NavbarMobile = (props: TNProps) => {
  return (
    <>
      <Box>
        <Rightbar onClick={props.onClick} />
      </Box>
    </>
  );
};

export default NavbarMobile;
