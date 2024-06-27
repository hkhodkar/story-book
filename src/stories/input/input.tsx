import classNames from "classnames";
import { InputProps } from "./input.type";
import { Size } from "../../types/size.type";
import React, { ChangeEvent, useState } from "react";

const sizeClasses: Record<Size, string> = {
  tiny: "input-xs",
  small: "input-sm",
  normal: "input-md",
  large: "input-lg",
};

const Input: React.FC<InputProps> = ({
  label,
  variant,
  className,
  type = "text",
  id,
  componentSize: size = "large",
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
      ? "absolute -top-6 left-2 text-neutral-color "
      : "absolute top-[10px] text-input-focus ";

  const inputClasses = classNames(
    "input",
    className,
    { [`input-${variant}`]: variant },
    { [`${sizeClasses[size]}`]: size }
  );
  return (
    <div className="relative top-">
      <label className={labelClassName + "label"} htmlFor={label}>
        {label}
      </label>
      <input
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
  );
};

export default Input;
