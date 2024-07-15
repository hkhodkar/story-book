import React from "react";
import { DialogProps } from "./dialog.type";

const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  children,
  closeOnClickOutside = true,
}) => {
  if (!isOpen) return null;
  function handleOnClose() {
    if (!closeOnClickOutside) return;
    onClose();
  }

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? "fade-in" : "fade-out"
      }`}
    >
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={handleOnClose}
      ></div>
      <div
        className={`bg-white rounded-lg p-8 z-10 max-w-lg mx-auto shadow-lg ${
          isOpen ? "fade-in" : "fade-out"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Dialog;
