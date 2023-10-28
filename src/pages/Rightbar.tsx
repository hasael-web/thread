import {
  Box,
  Button,
  Heading,
  List,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import ButtonB from "../components/Element/ButtonB";
import { AiOutlineMenu } from "react-icons/ai";
import RightBarList from "../components/Bar/RightBarList";

type TProps = {
  onClick?: () => void;
};

const Rightbar = (props: TProps) => {
  return (
    <Box
      borderLeft={"1px solid #767676"}
      w={"400px"}
      bg={"blackAlpha.500"}
      position={"fixed"}
      top={"0"}
      right={"0"}
      bottom={"0"}>
      <ButtonB
        fontSize="30px"
        left="3"
        top="2"
        position="absolute"
        positionP="relative"
        onClick={props.onClick}>
        <BsFillArrowRightCircleFill />
      </ButtonB>
      <Box py={"2"} px={"3"} m={"2"}>
        <RightBarList />
      </Box>
    </Box>
  );
};

export default Rightbar;
