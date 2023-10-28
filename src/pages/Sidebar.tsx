import {
  Box,
  Button,
  Heading,
  List,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import ButtonB from "../components/Element/ButtonB";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { SidebarList } from "../components/Bar";

type TProps = {
  onClick?: () => void | undefined;
};

const Sidebar = (props: TProps) => {
  return (
    <>
      <Box
        borderRight={"1px solid #767676"}
        w={"250px"}
        bg={"blackAlpha.300"}
        position={"fixed"}
        bottom={"0"}
        top={"0"}
        left={"0"}
        p={"10px"}
        textAlign={"start"}>
        <Box position={"relative"}>
          <ButtonB
            position="absolute"
            positionP="relative"
            fontSize="30px"
            right="3"
            onClick={props.onClick}
            top="2">
            <BsFillArrowLeftCircleFill />
          </ButtonB>
        </Box>
        <SidebarList />
      </Box>
    </>
  );
};

export default Sidebar;
