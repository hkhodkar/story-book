import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { Size } from "../../types/size.type";
import ExpansionPanel from "./expansion-panel";
import { Variant } from "../../types/variant.type";

describe("Expansion panel Component", () => {
  test("renders a default expansion", () => {
    render(
      <ExpansionPanel title="expansion">expansion content</ExpansionPanel>
    );
    expect(screen.getByTestId("expansion")).toBeInTheDocument();
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
    test(`applies the correct css class for ${variant} expansion`, () => {
      render(
        <ExpansionPanel variant={variant as Variant}>
          expansion content
        </ExpansionPanel>
      );
      expect(screen.getByTestId("expansion")).toHaveClass(
        `expansion-panel-${variant}`
      );
    });
  });

  [
    { size: "tiny", class: "expansion-panel-xs" },
    { size: "small", class: "expansion-panel-sm" },
    { size: "large", class: "expansion-panel-lg" },
  ].forEach((item) => {
    test(`applies the correct class for ${item.size} expansion`, () => {
      render(
        <ExpansionPanel
          title="Expansion panel"
          componentSize={item.size as Size}
        >
          Expansion panel
        </ExpansionPanel>
      );
      expect(screen.getByTestId("expansion")).toHaveClass(`${item.class}`);
    });
  });
});
