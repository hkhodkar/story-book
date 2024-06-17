import { ComponentBase } from "@costumeTypes/component-base.type";

export type LoadingProps = ComponentBase & {
  type?: "spinner" | "ring";
};
