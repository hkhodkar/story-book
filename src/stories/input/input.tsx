import classNames from "classnames";
import { InputProps } from "./input.type";
import { Size } from "../../types/size.type";
import React, { useState } from "react";
import themeColors from "../../theme/colors";

const sizeClasses: Record<Size, string> = {
  tiny: "input-xs",
  small: "input-sm",
  normal: "input-md",
  large: "input-lg",
};

const Input: React.FC<InputProps> = ({
  label,
  variant = "primary",
  className,
  type = "text",
  id,
  componentSize = "large",
  hasPrefix,
  hasSuffix,
  inputPrefix,
  inputSuffix,
  value = "",
  onChange,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const labelClassName =
    isFocused || value.toString().length > 0
      ? "absolute -top-6 left-2 "
      : "absolute top-[12px] text-input-focus left-2 ";

  const inputClasses = classNames(
    "input",
    "w-full",
    { "rounded-s-none": hasPrefix },
    { "rounded-e-none": hasSuffix },
    className,
    { [`input-${variant}`]: variant }
  );

  const inputSizeClasses = classNames("flex flex-row items-stretch", {
    [`${sizeClasses[componentSize]}`]: componentSize,
  });

  const borderClass = `flex p-2 justify-center items-center border-[1px] text-neutral dark:text-white`;

  const borderColor = themeColors[variant];

  return (
    <div data-testid="container-size" className={inputSizeClasses}>
      {hasPrefix && (
        <div
          style={{ borderColor: borderColor }}
          className={`${borderClass} rounded-s-md`}
        >
          {inputPrefix}
        </div>
      )}
      <div className="w-full relative">
        <label className={labelClassName + "label"} htmlFor={label}>
          {label}
        </label>
        <input
          {...rest}
          data-testid="input"
          type={type}
          id={id}
          className={inputClasses}
          required
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          onChange={onChange}
        />
      </div>
      {hasSuffix && (
        <div
          style={{ borderColor: borderColor }}
          className={`${borderClass} rounded-e-md`}
        >
          {inputSuffix}
        </div>
      )}
    </div>
  );
};
export default Input;
