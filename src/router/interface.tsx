import { ReactNode } from "react";

export interface route {
  path: string;
  component: ReactNode | any;
  name: string;
  exact: boolean;
}
