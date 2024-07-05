import { ReactElement } from "react";
import { ComponentBase } from "../../types/component-base.type";
import { Variant } from "../../types/variant.type";

export type reportCardType = ComponentBase & {
  value?: string;
  title?: string;
  icon?: ReactElement;
  iconVariant?: Variant;
};
