import React, { useState } from "react";
import { Size } from "../../types/size.type";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { ExpansionPanelProps } from "./expansion-panel.type";
import classNames from "classnames";

const sizeClasses: Record<Size, string> = {
  tiny: "expansion-panel-xs",
  small: "expansion-panel-sm",
  normal: "expansion-panel-md",
  large: "expansion-panel-lg",
};

const ExpansionPanel: React.FC<ExpansionPanelProps> = ({
  variant = "accent",
  componentSize = "normal",
  title,
  children,
  contentWidth,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const componentSizeClasses = classNames({
    [`${sizeClasses[componentSize]}`]: componentSize,
  });

  const classes = classNames("expansion-panel", componentSizeClasses, {
    [`expansion-panel-${variant}`]: variant,
  });

  return (
    <div className=" container mx-auto" {...props}>
      <div
        data-testid="expansion"
        className={classes}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-medium text-white">{title}</h2>
        <div className="text-white">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </div>
      {isOpen && (
        <div
          style={{ width: contentWidth }}
          className={
            `border-dark-primary bg-white dark:bg-neutral text-neutral  dark:text-white ` +
            componentSizeClasses
          }
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default ExpansionPanel;
