import { Avatar, Box, Button, Text } from "@chakra-ui/react";

const SuggestionUser = () => {
  return (
    <Box display={"flex"} justifyContent={"space-between"} mt={"6"}>
      <Box display={"flex"} gap={"4"}>
        <Avatar
          src="https://bit.ly/broken-link"
          width={"50px"}
          height={"50px"}
          color={"white"}
          bg={"whatsapp.700"}
        />
        <Box>
          <Text fontSize={"md"} textTransform={"capitalize"}>
            FullName
          </Text>
          <Text color={"gray.600"} textAlign={"start"}>
            @user_name
          </Text>
        </Box>
      </Box>
      <Box>
        <Box
          px={"4"}
          py={"2"}
          border={"0.5px solid white"}
          borderRadius={"20px"}
          textAlign={"center"}>
          <Button>Follow</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SuggestionUser;
