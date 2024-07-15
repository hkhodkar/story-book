import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { withTests } from "@storybook/addon-jest";

import results from "../../../.jest-test-results.json";

import Color from "./colors";

const meta: Meta = {
  component: Color,
  tags: ["autodocs"],
};

export default meta;

export type Story = StoryObj<typeof Color>;

export const test: Story = {
  decorators: [withTests({ results })],
  parameters: {
    controls: {
      exclude: ["componentSize"],
    },
  },
  render: (args) => (
    <Color {...args} label={args.variant?.toString() ?? "color"} />
  ),
};

export const BrandColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Color label="primary" variant="primary" />
      <Color label="neutral" variant="neutral" />
      <Color label="secondary" variant="secondary" />
      <Color label="accent" variant="accent" />
      <Color label="ghost" variant="ghost" />
    </div>
  ),
};

export const StateColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Color label="info" variant="info" />
      <Color label="success" variant="success" />
      <Color label="warning" variant="warning" />
      <Color label="error" variant="error" />
    </div>
  ),
};
