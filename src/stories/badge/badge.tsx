import React, { FC } from "react";
import classNames from "classnames";
import { Size } from "../../types/size.type";
import { BadgeProps, BadgeShape } from "./badg.type";

const Badge: FC<BadgeProps> = ({
  variant = "primary",
  className,
  shape = "wide",
  children,
  componentSize = "large",
}) => {
  const circleSizeClasses: Record<Size, string> = {
    tiny: "badge-circle-xs",
    small: "badge-circle-sm",
    normal: "badge-circle-md",
    large: "badge-circle-lg",
  };
  const wideSizeClasses: Record<Size, string> = {
    tiny: "badge-wide-xs",
    small: "badge-wide-sm",
    normal: "badge-wide-md",
    large: "badge-wide-lg",
  };
  const shapeClasses: Record<BadgeShape, string> = {
    circle: "badge-circle",
    wide: "badge-wide",
  };
  const classes = classNames(
    "badge",
    className,
    { [`badge-${variant}`]: variant },
    { [`${shapeClasses[shape]}`]: shape },
    {
      [`${circleSizeClasses[componentSize]}`]:
        circleSizeClasses && shape === "circle",
    },
    {
      [`${wideSizeClasses[componentSize]}`]:
        wideSizeClasses && shape === "wide",
    }
  );

  return (
    <div data-testid="badge" className={classes}>
      {children}
    </div>
  );
};

export default Badge;
