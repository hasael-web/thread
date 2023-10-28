import { ReactNode } from "react";

export type TDesktop = {
  leftBar?: boolean;
  leftBarShow?: () => void | undefined;
  children?: ReactNode;
  rightBar?: boolean;
  rightBarShow?: () => void | undefined;
};
