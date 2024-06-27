import React, { useState } from "react";
import { CheckBoxProps } from "./checkbox.type";
import { Size } from "../../types/size.type";
import classNames from "classnames";

const CustomCheckbox: React.FC<CheckBoxProps> = ({
  checked = false,
  onChange,
  label,
  variant = "accent",
  componentSize = "normal",
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(!isChecked);
    }
  };

  const sizeClasses: Record<Size, string> = {
    tiny: "checkbox-xs",
    small: "checkbox-sm",
    normal: "checkbox-md",
    large: "checkbox-lg",
  };

  const labelSizeClasses: Record<Size, string> = {
    tiny: "checkbox-label--xs",
    small: "checkbox-label--sm",
    normal: "checkbox-label--md",
    large: "checkbox-label--lg",
  };

  const variantClasses = classNames("checkbox", {
    [`checkbox-${variant}`]: variant ? isChecked : "",
    [`${sizeClasses[componentSize]}`]: componentSize,
  });
  const checkboxClasses = classNames("text-white", {
    [`${sizeClasses[componentSize]}`]: componentSize,
  });
  const labelClasses = classNames("checkbox-label", "ml-2 text-gray-700", {
    [`${labelSizeClasses[componentSize]}`]: componentSize,
  });
  return (
    <label className="checkbox-label">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="hidden"
        {...props}
      />
      <span data-testid="checkbox" className={variantClasses}>
        {isChecked && (
          <svg
            data-testid="size"
            className={checkboxClasses}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        )}
      </span>
      {label && <span className={labelClasses}>{label}</span>}
    </label>
  );
};

export default CustomCheckbox;
