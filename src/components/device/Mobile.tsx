import { Avatar, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import ButtonB from "../Element/ButtonB";
import NavbarMobile from "../../pages/NavbarMobile";
import { TMobile } from "../Type/TMobile";

const Mobile = (props: TMobile) => {
  const { children } = props;
  const [showBar, setShowBar] = useState(true);

  const handleShowBar = () => {
    setShowBar(!showBar);
  };

  return (
    <Box display={{ base: "flex", md: "none" }} position={"relative"}>
      <Box textAlign={"start"} display={"flex"} flexDirection={"column"}>
        <Box mb={"50px"}>
          <ButtonB w="100%" right="0" onClick={handleShowBar}>
            <Box position={"absolute"} display={"flex"} right={"0"}>
              <Box
                bg={"darkgoldenrod"}
                borderRadius={"50%"}
                width={"60px"}
                h={"60px"}>
                <Avatar
                  src="https://bit.ly/broken-link"
                  width={"50px"}
                  height={"50px"}
                />
              </Box>
            </Box>
          </ButtonB>
          <Box display={!showBar ? "block" : "none"}>
            <NavbarMobile onClick={handleShowBar} />
          </Box>
        </Box>
        <Box>{children}</Box>
      </Box>
    </Box>
  );
};

export default Mobile;
