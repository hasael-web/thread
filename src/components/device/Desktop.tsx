import { Box } from "@chakra-ui/react";
import React from "react";
import ButtonB from "../Element/ButtonB";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import Sidebar from "../../pages/Sidebar";
import Rightbar from "../../pages/Rightbar";
import { TDesktop } from "../Type/TDesktop";

const Desktop = (props: TDesktop) => {
  const { children, leftBar, leftBarShow, rightBar, rightBarShow } = props;
  return (
    <Box
      display={{ base: "none", md: "flex" }}
      justifyContent="center"
      alignItems="center">
      <Box
        position={"absolute"}
        left={"4"}
        top={"2"}
        display={!leftBar ? "block" : "none"}>
        <ButtonB
          position="absolute"
          positionP="relative"
          fontSize="30px"
          left="0"
          onClick={leftBarShow}
          top="3">
          <BsFillArrowRightCircleFill />
        </ButtonB>
      </Box>
      <Box w={{ md: "40%" }} display={!leftBar ? "none" : "block"}>
        <Sidebar onClick={leftBarShow} />
      </Box>
      <Box
        marginRight={"40px"}
        w={!leftBar ? { md: "95%" } : { md: "80%%" }}
        marginLeft={!leftBar ? "50px" : "-20px"}
        display={"flex"}
        alignItems={"start"}
        justifyContent={"start"}
        textAlign={"start"}>
        {children}
      </Box>
      <Box
        position={"absolute"}
        right={"4"}
        top={"2"}
        display={!rightBar ? "block" : "none"}>
        <ButtonB
          position="absolute"
          positionP="relative"
          fontSize="30px"
          right="0"
          onClick={rightBarShow}
          top="3">
          <BsFillArrowLeftCircleFill />
        </ButtonB>
      </Box>
      <Box w={{ md: "50%" }} display={!rightBar ? "none" : "block"}>
        <Rightbar onClick={rightBarShow} />
      </Box>
    </Box>
  );
};

export default Desktop;
