import React from "react";
import { ComponentBase } from "../../types/component-base.type";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  ComponentBase & {
    label?: string;
    id?: string;
    hasSuffix?: boolean;
    hasPrefix?: boolean;
    type?: "text" | "password";
    inputSuffix?: any;
    inputPrefix?: any;
  };
