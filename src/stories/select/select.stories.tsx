import React from "react";
import Select from "./select";
import { Meta, StoryObj } from "@storybook/react";
import { withTests } from "@storybook/addon-jest";
import results from "../../../.jest-test-results.json";

const meta: Meta<typeof Select> = {
  component: Select,
  tags: ["autodocs"],
  decorators: [withTests({ results })],
};

export default meta;

type Story = StoryObj<typeof Select>;

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

export const Test: Story = {
  render: ({ ...args }) => <Select options={options} {...args} />,
};

export const BrandColors: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-full">
      <Select componentSize="tiny" variant="neutral" options={options} />
      <Select componentSize="tiny" variant="primary" options={options} />
      <Select componentSize="tiny" variant="secondary" options={options} />
      <Select componentSize="tiny" variant="accent" options={options} />
      <Select componentSize="tiny" variant="ghost" options={options} />
      <Select componentSize="tiny" variant="info" options={options} />
      <Select componentSize="tiny" variant="warning" options={options} />
      <Select componentSize="tiny" variant="success" options={options} />
      <Select componentSize="tiny" variant="error" options={options} />
    </div>
  ),
};

export const SelectSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-full">
      <Select componentSize="tiny" variant="primary" options={options} />
      <Select componentSize="small" variant="secondary" options={options} />
      <Select componentSize="normal" variant="accent" options={options} />
      <Select componentSize="large" variant="error" options={options} />
    </div>
  ),
};
