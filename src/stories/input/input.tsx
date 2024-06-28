import classNames from "classnames";
import { InputProps } from "./input.type";
import { Size } from "../../types/size.type";
import React, { ChangeEvent, useState } from "react";
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
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSetValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const labelClassName =
    isFocused || value.length > 0
      ? "absolute -top-6 left-2 "
      : `absolute top-[12px] text-input-focus ${
          hasPrefix ? "left-[64px] " : "left-2 "
        }`;

  const inputClasses = classNames(
    "input",
    "w-full",
    { "rounded-s-none": hasPrefix },
    { "rounded-e-none": hasSuffix },
    className,
    { [`input-${variant}`]: variant }
  );

  const inputSizeClasses = classNames("relative flex flex-row items-stretch", {
    [`${sizeClasses[componentSize]}`]: componentSize,
  });

  const borderClass = `flex p-2 justify-center items-center border-[1px]`;

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
      <div className="w-full">
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
          onChange={handleSetValue}
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
