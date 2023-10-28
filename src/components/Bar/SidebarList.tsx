import { Box, Button, Heading, List, ListItem } from "@chakra-ui/react";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { SlUserFollow } from "react-icons/sl";
import { BiSearchAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import Logout from "../something/Logout";

const SidebarList = () => {
  const styleList = {
    display: "flex",
    alignItems: "center",
    fontSize: "32px",
    gap: "18px",
  };
  const styleP = {
    fontSize: "20px",
  };
  return (
    <>
      <Heading
        my={"20px"}
        textTransform={"uppercase"}
        fontSize={"40px"}
        fontWeight={"900"}
        fontFamily={"inherit"}
        letterSpacing={"4px"}
        color={"green.500"}>
        circle
      </Heading>
      <List display={"flex"} flexDirection={"column"} gap={"30px"}>
        <ListItem>
          <Link to={"#"} style={styleList}>
            <AiFillHome /> <span style={styleP}>Home</span>
          </Link>
        </ListItem>
        <ListItem>
          <Link to={"#"} style={styleList}>
            <BiSearchAlt />
            <span style={styleP}>search</span>
          </Link>
        </ListItem>
        <ListItem>
          <Link to={"#"} style={styleList}>
            <SlUserFollow />
            <span style={styleP}>Follows</span>
          </Link>
        </ListItem>
        <ListItem>
          <Link to={"#"} style={styleList}>
            <BsPersonCircle />
            <span style={styleP}>Profile</span>
          </Link>
        </ListItem>
      </List>
      <Box
        mt={"30px"}
        textAlign={"center"}
        bg={"green.500"}
        py={"10px"}
        borderRadius={"10px"}>
        <Button fontWeight={"bold"}>CREATE POST</Button>
      </Box>
      <Box position={"absolute"} bottom={"4"} left={"10"}>
        <Logout />
      </Box>
    </>
  );
};

export default SidebarList;
