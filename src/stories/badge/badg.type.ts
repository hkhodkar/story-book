import { ButtonHTMLAttributes } from "react";
import { ComponentBase } from "../../types/component-base.type";

export type BadgeShape = "wide" | "circle";
export type BadgeProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ComponentBase & {
    shape?: "wide" | "circle";
  };
