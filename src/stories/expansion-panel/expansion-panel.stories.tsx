import React from "react";
import ExpansionPanel from "./expansion-panel";
import { Meta, StoryObj } from "@storybook/react";
import { withTests } from "@storybook/addon-jest";
import results from "../../../.jest-test-results.json";

const meta: Meta<typeof ExpansionPanel> = {
  component: ExpansionPanel,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ExpansionPanel>;

export const Test: Story = {
  decorators: [withTests({ results })],
  render: (args) => (
    <ExpansionPanel title="test" variant="primary" {...args}>
      <p className="p-4">This is the content of the expansion panel.</p>
    </ExpansionPanel>
  ),
};

export const BrandColors: Story = {
  render: () => (
    <div className="flex flex-col w-full gap-4">
      <ExpansionPanel title="default" variant="neutral">
        <p className="p-4">This is the content of the expansion panel.</p>
      </ExpansionPanel>

      <ExpansionPanel title="primary" variant="primary">
        <p className="p-4">This is the content of the expansion panel.</p>
      </ExpansionPanel>

      <ExpansionPanel title="secondary" variant="secondary">
        <p className="p-4">This is the content of the expansion panel.</p>
      </ExpansionPanel>

      <ExpansionPanel title="accent" variant="accent">
        <p className="p-4">This is the content of the expansion panel.</p>
      </ExpansionPanel>

      <ExpansionPanel title="ghost" variant="ghost">
        <p className="p-4">This is the content of the expansion panel.</p>
      </ExpansionPanel>
    </div>
  ),
};

export const StateColors: Story = {
  render: () => (
    <div className="flex flex-col w-full gap-4">
      <ExpansionPanel title="info" variant="info">
        <p className="p-4">This is the content of the expansion panel.</p>
      </ExpansionPanel>

      <ExpansionPanel title="success" variant="success">
        <p className="p-4">This is the content of the expansion panel.</p>
      </ExpansionPanel>

      <ExpansionPanel title="warning" variant="warning">
        <p className="p-4">This is the content of the expansion panel.</p>
      </ExpansionPanel>

      <ExpansionPanel title="error" variant="error">
        <p className="p-4">This is the content of the expansion panel.</p>
      </ExpansionPanel>
    </div>
  ),
};

export const ExpansionSizes: Story = {
  render: () => (
    <div className="flex flex-col w-full gap-4">
      <ExpansionPanel title="xs" componentSize="tiny" variant="primary">
        <p className="p-4">This is the content of the expansion panel.</p>
      </ExpansionPanel>

      <ExpansionPanel title="small" componentSize="small" variant="secondary">
        <p className="p-4">This is the content of the expansion panel.</p>
      </ExpansionPanel>

      <ExpansionPanel title="normal" componentSize="normal" variant="accent">
        <p className="p-4">This is the content of the expansion panel.</p>
      </ExpansionPanel>

      <ExpansionPanel title="large" componentSize="large" variant="error">
        <p className="p-4">This is the content of the expansion panel.</p>
      </ExpansionPanel>
    </div>
  ),
};
