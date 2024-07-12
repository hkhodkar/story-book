import classNames from "classnames";
import React, { ChangeEvent, useState } from "react";

import { SelectProps } from "./select.type";
import { Size } from "../../types/size.type";

const sizeClasses: Record<Size, string> = {
  tiny: "select-xs",
  small: "select-sm",
  normal: "select-md",
  large: "select-lg",
};

const Select: React.FC<SelectProps> = ({
  variant = "primary",
  className,
  options,
  componentSize = "large",
  value,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) onChange(event.target.value);
  };

  const classes = classNames("select", className, {
    [`select-${variant}`]: variant,
  });

  const componentSizeClasses = classNames("relative", "inline-block", {
    [`${sizeClasses[componentSize]}`]: componentSize,
  });

  return (
    <div data-testid="select-size" className={componentSizeClasses}>
      <select
        data-testid="select"
        className={classes}
        value={value}
        onChange={handleChange}
      >
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-neutral dark:text-white">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M7 10l5 5 5-5H7z" />
        </svg>
      </div>
    </div>
  );
};

export default Select;
