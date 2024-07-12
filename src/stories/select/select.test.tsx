import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Select from "./select";
import { Size } from "../../types/size.type";
import { Variant } from "../../types/variant.type";

describe("select Component", () => {
  test("renders a default select", () => {
    render(<Select></Select>);
    expect(screen.getByTestId("select")).toBeInTheDocument();
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
    test(`applies the correct css class for ${variant} select`, () => {
      render(<Select variant={variant as Variant}></Select>);
      expect(screen.getByTestId("select")).toHaveClass(`select-${variant}`);
    });
  });

  [
    { size: "tiny", class: "select-xs" },
    { size: "small", class: "select-sm" },
    { size: "large", class: "select-lg" },
  ].forEach((item) => {
    test(`applies the correct class for ${item.size} select`, () => {
      render(
        <Select variant="primary" componentSize={item.size as Size}></Select>
      );
      expect(screen.getByTestId("select-size")).toHaveClass(`${item.class}`);
    });
  });
});
