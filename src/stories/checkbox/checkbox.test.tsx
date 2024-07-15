import React from "react";
import CustomCheckbox from "./checkbox";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Size } from "../../types/size.type";
import { Variant } from "../../types/variant.type";

describe("checkbox component:", () => {
  test("default checkbox should be render in document", () => {
    render(<CustomCheckbox label="Label" />);
    const element = screen.getByTestId("checkbox");
    expect(element).toBeInTheDocument();
  });

  [
    { size: "tiny", class: "checkbox-xs" },
    { size: "small", class: "checkbox-sm" },
    { size: "normal", class: "checkbox-md" },
    { size: "large", class: "checkbox-lg" },
  ].forEach((item) => {
    test(`checkbox with size ${item.size} should have correct class`, () => {
      render(<CustomCheckbox checked componentSize={item.size as Size} />);
      const element = screen.getByTestId("size");
      expect(element).toHaveClass(item.class);
    });
  });

  [
    "neutral",
    "primary",
    "secondary",
    "accent",
    "ghost",
    "info",
    "success",
    "warning",
    "error",
  ].forEach((variant) => {
    test(`applies the correct css class for ${variant} checkbox`, () => {
      render(<CustomCheckbox checked variant={variant as Variant} />);
      const element = screen.getByTestId("checkbox");
      expect(element).toHaveClass(`checkbox-${variant}`);
    });
  });
});
