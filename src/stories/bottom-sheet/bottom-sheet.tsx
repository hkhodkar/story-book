import React from "react";
import classNames from "classnames";

import { BottomSheetProps } from "./bottom-sheet.type";

const BottomSheet: React.FC<BottomSheetProps> = ({
  isOpen,
  onClose,
  children,
  closeOnClickOutside = true,
  fullHeight = false,
}) => {
  if (!isOpen) return null;
  function handleOnClose() {
    if (!closeOnClickOutside) return;
    onClose();
  }

  const classes = classNames(
    "bg-white dark:bg-neutral dark:text-white w-full p-8  z-10 shadow-lg",
    {
      ["h-screen "]: fullHeight,
    },
    {
      ["rounded-t-lg"]: !fullHeight,
    }
  );

  return (
    <div
      className={`fixed inset-0 flex items-end z-50 ${
        isOpen ? "slide-up" : "slide-down"
      }`}
    >
      <div
        className={`fixed inset-0  ${isOpen ? "slide-up" : "slide-down"}`}
        onClick={handleOnClose}
      ></div>
      <div className={classes}>{children}</div>
    </div>
  );
};

export default BottomSheet;
