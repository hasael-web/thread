import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import SuggestionUser from "./SuggestionUser";

const AppearanceSuggested = () => {
  return (
    <Box borderRadius={"10px"} bg={"gray.900"} mt={"10"} py={"2"} px={"2"}>
      <Heading
        fontSize={"lg"}
        fontWeight={"bold"}
        borderBottom={"1px solid white"}>
        Suggested for you
      </Heading>
      <SuggestionUser />
      <SuggestionUser />
      <SuggestionUser />
    </Box>
  );
};

export default AppearanceSuggested;
