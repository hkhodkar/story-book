import React, { FC } from "react";
import { colorsProps } from "./color.type";
import classNames from "classnames";

const colors: FC<colorsProps> = ({ variant = "primary", label = "color" }) => {
  const classes = classNames("color", {
    [`color-${variant}`]: variant,
  });
  return (
    <div data-testid="color" className={classes}>
      {label}
    </div>
  );
};

export default colors;
