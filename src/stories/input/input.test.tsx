import React from "react";
import Input from "./input";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Size } from "../../types/size.type";
import { Variant } from "../../types/variant.type";

describe("test input component", () => {
  test("default input should be render in document", () => {
    render(<Input label="Label" />);
    const element = screen.getByTestId("input");
    expect(element).toBeInTheDocument();
  });

  [
    { size: "tiny", class: "input-xs" },
    { size: "small", class: "input-sm" },
    { size: "normal", class: "input-md" },
    { size: "large", class: "input-lg" },
  ].forEach((item) => {
    test(`input with size ${item.size} should have correct class`, () => {
      render(<Input componentSize={item.size as Size} />);
      const element = screen.getByTestId("container-size");
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
    test(`applies the correct css class for ${variant} input`, () => {
      render(<Input variant={variant as Variant} />);
      const element = screen.getByTestId("input");
      expect(element).toHaveClass(`input-${variant}`);
    });
  });
});
