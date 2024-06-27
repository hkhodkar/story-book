import { Size } from "../../types/size.type";
import { LoadingProps } from "./loading.type";
import classNames from "classnames";
import React from "react";

const sizeClasses: Record<Size, string> = {
  tiny: "loading-xs",
  small: "loading-sm",
  normal: "loading-md",
  large: "loading-lg",
};

const Loading: React.FC<LoadingProps> = ({
  variant,
  type = "spinner",
  componentSize: size = "large",
  className,
}: LoadingProps) => {
  const classes = classNames(
    "loading",
    className,
    { [`${sizeClasses[size]}`]: size },
    { [`loading-${variant}`]: variant },
    { [`loading-${type}`]: type }
  );
  return <span data-testid="loading" className={classes} />;
};

export default Loading;
