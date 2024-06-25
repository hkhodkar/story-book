import { ButtonHTMLAttributes } from "react";
import { LoadingBehavior } from "../loading/loading.type";
import { ComponentBase } from "../../types/component-base.type";

export type ButtonShape = "default" | "wide" | "full" | "square";
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ComponentBase &
  LoadingBehavior & {
    isOutline?: boolean;
    shape?: ButtonShape;
    isLink?: boolean;
    animatedIcon?: boolean;
    isDisabled?: boolean;
  };
