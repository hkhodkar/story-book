import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Loading from "./loading";
import React from "react";
import { Size } from "../../types/size.type";
import { Variant } from "../../types/variant.type";

describe("test loading component", () => {
  test("default loading should be render in document", () => {
    render(<Loading />);
    const element = screen.getByTestId("loading");
    expect(element).toBeInTheDocument();
  });

  [
    { size: "tiny", class: "loading-xs" },
    { size: "small", class: "loading-sm" },
    { size: "normal", class: "loading-md" },
    { size: "large", class: "loading-lg" },
  ].forEach((item) => {
    test(`loading with size ${item.size} should have correct class`, () => {
      render(<Loading componentSize={item.size as Size} />);
      const element = screen.getByTestId("loading");
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
    test(`applies the correct css class for ${variant} button`, () => {
      render(<Loading variant={variant as Variant} />);
      const element = screen.getByTestId("loading");
      expect(element).toHaveClass(`loading-${variant}`);
    });
  });
});
