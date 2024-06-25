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
        <Input {...args} label="Label" />
      </div>
    );
  },
};

export const InputWithDifferentColors: Story = {
  render: () => (
    <div className="flex flex-col gap-10 mt-10">
      <Input variant="neutral" label="Label" />
      <Input variant="primary" label="Label" />
      <Input variant="secondary" label="Label" />
      <Input variant="accent" label="Label" />
      <Input variant="success" label="Label" />
      <Input variant="info" label="Label" />
      <Input variant="warning" label="Label" />
      <Input variant="error" label="Label" />
    </div>
  ),
};

export const InPutWithDifferentSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-10 mt-10">
      <Input size="tiny" variant="accent" label="Label" />
      <Input size="small" variant="accent" label="Label" />
      <Input size="normal" variant="accent" label="Label" />
      <Input size="large" variant="accent" label="Label" />
    </div>
  ),
};
