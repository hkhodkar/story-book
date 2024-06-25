import { ComponentBase } from "../../types/component-base.type";

export type InputProps = ComponentBase & {
  label?: string;
  type?: "text" | "password";
  id?: string;
};
