import React from "react";
import { ComponentBase } from "../../types/component-base.type";

export type SelectProps = ComponentBase & {
  options?: { value: string; label: string }[];
  value?: string;
  onChange?: (value: string) => void;
};
