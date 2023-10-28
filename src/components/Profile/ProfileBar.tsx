import { Avatar, Box, Button, Heading, Text } from "@chakra-ui/react";

const ProfileBar = () => {
  return (
    <>
      <Box position={"relative"} zIndex={"0"}>
        <Heading
          textAlign={"start"}
          px={"5"}
          py={"4"}
          fontSize={"20px"}
          fontWeight={"extrabold"}>
          My Profile
        </Heading>
      </Box>
      <Box>
        <Box
          position={"relative"}
          bgGradient="linear(to-r, teal.500, green.500)"
          _hover={{
            bgGradient: "linear(to-r, red.500, yellow.500)",
          }}
          borderRadius={"10px"}
          width={"100%"}
          height={"80px"}>
          <Avatar
            zIndex={"10"}
            bg={"black"}
            position={"absolute"}
            top={"46px"}
            left={"2"}
            src="https://bit.ly/broken-link"
            width={"70px"}
            height={"70px"}
            color={"blackAlpha.700"}
          />
          <Button
            textTransform={"capitalize"}
            right={"3"}
            bg={"green.500"}
            borderRadius={"10px"}
            py={"2"}
            px={"5"}
            bottom={"-12"}
            position={"absolute"}>
            edit profile
          </Button>
        </Box>
        <Box
          borderRadius={"10px"}
          bg={"gray.900"}
          w={"94%"}
          position={"absolute"}
          height={"323px"}
          top={"5"}
          right={"3"}
          zIndex={"-1"}></Box>

        <Box
          mt={"50px"}
          textTransform={"capitalize"}
          textAlign={"start"}
          fontSize={"20px"}>
          ✌full Name✌
        </Box>
        <Text color={"gray.600"} textAlign={"start"}>
          @user_name
        </Text>
        <Text color={"HighlightText"} textAlign={"start"} mt={"3"}>
          My Bio profile
        </Text>
        <Box w={"100%"} display={"flex"} gap={"5"} mt={"2"}>
          <Box display={"flex"} gap={"3"} fontSize={"15px"}>
            <Text>230</Text>
            <Text color={"gray.600"}>Following</Text>
          </Box>
          <Box display={"flex"} gap={"3"} fontSize={"15px"}>
            <Text>230</Text>
            <Text color={"gray.600"}>Followers</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProfileBar;
