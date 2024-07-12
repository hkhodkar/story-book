import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Pagination from "./pagination";
import { Variant } from "../../types/variant.type";

describe("pagination Component", () => {
  test("renders a default pagination", () => {
    render(
      <Pagination
        currentPage={1}
        totalPages={10}
        onPageChange={() => console.log}
      ></Pagination>
    );
    expect(screen.getByTestId("pagination")).toBeInTheDocument();
  });
});
