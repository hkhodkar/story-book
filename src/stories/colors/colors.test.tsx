import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Colors from "./colors";
import { Variant } from "../../types/variant.type";

describe("Color Component", () => {
  test("renders a default colors", () => {
    render(<Colors label="Colors" />);
    expect(screen.getByTestId("color")).toBeInTheDocument();
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
    test(`applies the correct css class for ${variant} color`, () => {
      render(<Colors label="colors" variant={variant as Variant} />);
      expect(screen.getByTestId("color")).toHaveClass(`color-${variant}`);
    });
  });
});
