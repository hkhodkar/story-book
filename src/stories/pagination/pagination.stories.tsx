import React, { useState } from "react";
import Pagination from "./pagination";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  component: Pagination,
  tags: ["autodocs"],
  parameters: {
    controls: {
      exclude: ["componentSize"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const test: Story = {
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };
    return (
      <div className="dark:bg-neutral rounded-md p-8">
        <Pagination
          {...args}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    );
  },
};

export const BrandColors: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };
    return (
      <div className="dark:bg-neutral rounded-md p-8">
        <Pagination
          variant="primary"
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
        <Pagination
          variant="secondary"
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
        <Pagination
          variant="accent"
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    );
  },
};

export const StateColors: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };
    return (
      <div className="dark:bg-neutral rounded-md p-8">
        <Pagination
          variant="info"
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
        <Pagination
          variant="success"
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
        <Pagination
          variant="warning"
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
        <Pagination
          variant="error"
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    );
  },
};
