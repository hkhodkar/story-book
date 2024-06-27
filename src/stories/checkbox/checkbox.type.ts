import { ComponentBase } from "../../types/component-base.type";

export type CheckBoxProps = ComponentBase &
  React.InputHTMLAttributes<HTMLInputElement> & {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    label?: string;
  };
