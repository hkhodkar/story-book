import React from "react";
import Input from "./input";
import { Meta, StoryObj } from "@storybook/react";
import { withTests } from "@storybook/addon-jest";
import results from "../../../.jest-test-results.json";

const meta: Meta = {
  component: Input,
  tags: ["autodocs"],
  decorators: [withTests({ results })],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Tests: Story = {
  render: ({ ...args }) => {
    return (
      <div className="mt-10">
        <Input {...args} label={args.label ?? "Label"} />
      </div>
    );
  },
};

export const BrandColors: Story = {
  render: () => (
    <div className="flex flex-col gap-10 mt-10">
      <Input variant="neutral" label="neutral" />
      <Input variant="primary" label="primary" />
      <Input variant="secondary" label="secondary" />
      <Input variant="accent" label="accent" />
    </div>
  ),
};

export const StateColors: Story = {
  render: () => (
    <div className="flex flex-col gap-10 mt-10">
      <Input variant="success" label="success" />
      <Input variant="info" label="info" />
      <Input variant="warning" label="warning" />
      <Input variant="error" label="error" />
    </div>
  ),
};

export const InputSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-10 mt-10">
      <Input componentSize="tiny" variant="accent" label="tiny" />
      <Input componentSize="small" variant="accent" label="small" />
      <Input componentSize="normal" variant="accent" label="normal" />
      <Input componentSize="large" variant="accent" label="large" />
    </div>
  ),
};
