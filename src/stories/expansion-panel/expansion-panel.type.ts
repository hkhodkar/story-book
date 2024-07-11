import { ComponentBase } from "../../types/component-base.type";

export type ExpansionPanelProps = ComponentBase & {
  title?: string;
  children: React.ReactNode;
  contentWidth?: string;
};
