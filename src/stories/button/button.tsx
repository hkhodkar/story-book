import React from "react";
import classNames from "classnames";
import Loading from "../loading/loading";
import { Size } from "../../types/size.type";
import { ButtonProps, ButtonShape } from "./button.type";

const sizeClasses: Record<Size, string> = {
  tiny: "btn-xs",
  small: "btn-sm",
  normal: "",
  large: "btn-lg",
};

const shapeClasses: Record<ButtonShape, string> = {
  wide: "btn-wide",
  full: "btn-block",
  square: "btn-square",
  default: "",
};

const Button: React.FC<ButtonProps> = ({
  variant,
  componentSize = "normal",
  isDisabled = false,
  isOutline = false,
  shape = "default",
  isLoading = false,
  loadingType = "spinner",
  loadingText = "در حال ارسال درخواست",
  type = "button",
  isLink = false,
  children,
  className,
  animatedIcon = false,
  ...rest
}: ButtonProps) => {
  const classes = classNames(
    "btn",
    className,
    { [`btn-${variant}`]: variant },
    { [`${sizeClasses[componentSize]}`]: componentSize },
    { "btn-outline": isOutline },
    { "btn-link": isLink },
    { [`${shapeClasses[shape]}`]: shape },
    { "animated-icon": animatedIcon },
    { "pointer-events-none opacity-80": isLoading }
  );

  return (
    <button type={type} disabled={isDisabled} className={classes} {...rest}>
      {isLoading && <Loading type={loadingType} />}
      {isLoading ? loadingText : children}
    </button>
  );
};

export default Button;
