import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import ReportCard from "./reportCard";
import { Size } from "../../types/size.type";
import { Variant } from "../../types/variant.type";

describe("test report card component", () => {
  test("default report card should be render in document", () => {
    render(<ReportCard />);
    const element = screen.getByTestId("report-card");
    expect(element).toBeInTheDocument();
  });

  [
    { size: "tiny", class: "card-xs" },
    { size: "small", class: "card-sm" },
    { size: "normal", class: "card-md" },
    { size: "large", class: "card-lg" },
  ].forEach((item) => {
    test(`card with size ${item.size} should have correct class`, () => {
      render(<ReportCard componentSize={item.size as Size} />);
      const element = screen.getByTestId("report-card");
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
      render(<ReportCard variant={variant as Variant} />);
      const element = screen.getByTestId("report-card");
      expect(element).toHaveClass(`card-${variant}`);
    });
  });
});
