import { Box, Button } from "@chakra-ui/react";
import { ReactNode } from "react";

import { BsFillArrowRightCircleFill } from "react-icons/bs";

type TButtonC<T> = {
  onClick?: () => void;
  positionP?: T;
  position?: T;
  w?: T;
  left?: T;
  right?: T;
  top?: T;
  fontSize?: T;
  iconS?: any;
  children: ReactNode;
};

function ButtonB<T>(props: TButtonC<T>) {
  const {
    position,
    fontSize,
    left,
    onClick,
    top,
    w,
    positionP,
    right,
    children,
  } = props;
  return (
    <Box position={positionP ? positionP : "static"} w={w ? w : ""}>
      <Button
        zIndex={"10"}
        position={position ? position : "static"}
        left={left ? left : ""}
        top={top ? top : ""}
        onClick={onClick}
        fontSize={fontSize ? fontSize : ""}
        right={right ? right : ""}>
        {children}
      </Button>
    </Box>
  );
}

export default ButtonB;
