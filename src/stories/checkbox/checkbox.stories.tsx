import React from "react";
import Checkbox from "./checkbox";
import { Meta, StoryObj } from "@storybook/react";
import { withTests } from "@storybook/addon-jest";
import results from "../../../.jest-test-results.json";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Test: Story = {
  decorators: [withTests({ results })],
  render: (args) => <Checkbox {...args} label={args.label ?? "checkbox"} />,
};

export const BrandColors: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox variant="neutral" label="neutral" checked />
      <Checkbox variant="primary" label="primary" checked />
      <Checkbox variant="secondary" label="secondary" checked />
      <Checkbox variant="accent" label="accent" checked />
    </div>
  ),
};

export const StateColors: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox variant="success" label="success" checked />
      <Checkbox variant="info" label="info" checked />
      <Checkbox variant="warning" label="warning" checked />
      <Checkbox variant="error" label="error" checked />
    </div>
  ),
};

export const CheckboxSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox variant="primary" componentSize="tiny" label="tiny" checked />
      <Checkbox variant="primary" componentSize="small" label="small" checked />
      <Checkbox
        variant="primary"
        componentSize="normal"
        label="normal"
        checked
      />
      <Checkbox variant="primary" componentSize="large" label="large" checked />
    </div>
  ),
};
