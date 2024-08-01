import React from "react";
import "@testing-library/jest-dom";
import { describe } from "node:test";
import { render, screen } from "@testing-library/react";

import Badge from "./badge";
import { BadgeShape } from "./badg.type";
import { Size } from "../../types/size.type";
import { Variant } from "../../types/variant.type";

describe("Badge Component", () => {
  test("renders a default badge", () => {
    render(<Badge>badge</Badge>);
    expect(screen.getByTestId("badge")).toBeInTheDocument();
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
    test(`applies the correct css class for ${variant} badge`, () => {
      render(<Badge variant={variant as Variant}>click here</Badge>);
      expect(screen.getByTestId("badge")).toHaveClass(`badge-${variant}`);
    });
  });

  [
    { size: "tiny", class: "badge-wide-xs" },
    { size: "small", class: "badge-wide-sm" },
    { size: "large", class: "badge-wide-lg" },
  ].forEach((item) => {
    test(`applies the correct class for ${item.size} in wide badge`, () => {
      render(<Badge componentSize={item.size as Size}></Badge>);
      expect(screen.getByTestId("badge")).toHaveClass(`${item.class}`);
    });
  });

  [
    { size: "tiny", class: "badge-circle-xs" },
    { size: "small", class: "badge-circle-sm" },
    { size: "large", class: "badge-circle-lg" },
  ].forEach((item) => {
    test(`applies the correct class for ${item.size} in circle badge`, () => {
      render(<Badge shape="circle" componentSize={item.size as Size}></Badge>);
      expect(screen.getByTestId("badge")).toHaveClass(`${item.class}`);
    });
  });
});
