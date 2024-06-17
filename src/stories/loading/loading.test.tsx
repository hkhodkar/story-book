import { Loading } from ".";
import "@testing-library/jest-dom";
import { Size } from "@costumeTypes/size.type";
import { Variant } from "@costumeTypes/variant.type";
import { render, screen } from "@testing-library/react";

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
      render(<Loading size={item.size as Size} />);
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
