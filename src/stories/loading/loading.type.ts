import { ComponentBase } from "../../types/component-base.type";

export type LoadingProps = ComponentBase & {
  type?: "spinner" | "ring";
};

export type LoadingBehavior = {
  isLoading?: boolean;
  loadingText?: string;
  loadingType?: "spinner" | "ring";
};
