import React from "react";
import "@testing-library/jest-dom";
import { describe } from "node:test";
import { render, screen } from "@testing-library/react";

import Button from "./button";
import { ButtonShape } from "./button.type";
import { Size } from "../../types/size.type";
import { Variant } from "../../types/variant.type";

describe("Button Component", () => {
  test("renders a default button", () => {
    render(<Button>click here</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("disables the button when isDisabled prop is true", () => {
    render(<Button isDisabled>click here</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
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
      render(<Button variant={variant as Variant}>click here</Button>);
      expect(screen.getByRole("button")).toHaveClass(`btn-${variant}`);
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
    test(`applies the correct  disabled css class for disabled ${variant} button`, () => {
      render(
        <Button isDisabled variant={variant as Variant}>
          click here
        </Button>
      );
      expect(screen.getByRole("button")).toHaveClass(`btn-${variant}-disabled`);
    });
  });

  [
    { size: "tiny", class: "btn-xs" },
    { size: "small", class: "btn-sm" },
    { size: "large", class: "btn-lg" },
  ].forEach((item) => {
    test(`applies the correct class for ${item.size} button`, () => {
      render(<Button componentSize={item.size as Size}></Button>);
      expect(screen.getByRole("button")).toHaveClass(`${item.class}`);
    });
  });

  [
    { shape: "wide", class: "btn-wide" },
    { shape: "full", class: "btn-block" },
    { shape: "square", class: "btn-square" },
  ].forEach((item) => {
    test(`applies the correct class for ${item.shape} button`, () => {
      render(<Button shape={item.shape as ButtonShape}></Button>);
      expect(screen.getByRole("button")).toHaveClass(`${item.class}`);
    });
  });

  test("applies the correct class for outline button", () => {
    render(<Button isOutline>click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-outline");
  });

  test("applies the correct class for isLink button", () => {
    render(<Button isLink>click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-link");
  });

  test("applies the correct class for animatedIcon button", () => {
    render(<Button animatedIcon>click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("animated-icon");
  });

  test("applies the correct class for isLoading button", () => {
    render(<Button isLoading>click here</Button>);
    expect(screen.getByRole("button")).toHaveClass(
      "pointer-events-none opacity-80"
    );
  });

  test("applies the correct text for loading button", () => {
    const { getByText } = render(
      <Button isLoading loadingText="please wait!"></Button>
    );
    expect(getByText("please wait!")).toBeInTheDocument();
  });
});
