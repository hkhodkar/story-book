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

const dotsLoadingClasses: Record<Size, string> = {
  tiny: "dots-loading-xs",
  small: "dots-loading-sm",
  normal: "dots-loading-md",
  large: "dots-loading-lg",
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

  const dotsLoading = classNames(
    "dots-loading",
    className,
    { [`${dotsLoadingClasses[size]}`]: size },
    { [`dots-loading-${variant}`]: variant }
  );
  return (
    <>
      {(type === "ring" || type === "spinner") && (
        <span data-testid="loading" className={classes} />
      )}
      {type === "dots" && (
        <div className="flex space-x-2 justify-center items-center">
          <span className="sr-only">Loading...</span>
          <div className={`${dotsLoading} [animation-delay:-0.3s]`}></div>
          <div className={`${dotsLoading} [animation-delay:-0.15s]`}></div>
          <div className={`${dotsLoading}`}></div>
        </div>
      )}
    </>
  );
};

export default Loading;
