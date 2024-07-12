import React from "react";
import { ComponentBase } from "../../types/component-base.type";

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> &
  ComponentBase & {
    options?: { value: string; label: string }[];
    value?: string;
  };
