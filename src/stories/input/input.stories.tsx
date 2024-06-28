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

export const PrefixInput: Story = {
  render: () => (
    <div className="flex flex-col gap-10 mt-10">
      <Input variant="ghost" label="ghost" hasPrefix inputPrefix="+97" />
      <Input variant="primary" label="primary" hasPrefix inputPrefix="prefix" />
      <Input
        variant="secondary"
        label="secondary"
        hasPrefix
        inputPrefix="prefix"
      />
      <Input variant="accent" label="accent" hasPrefix inputPrefix="prefix" />
      <Input variant="info" label="info" hasPrefix inputPrefix="prefix" />
      <Input variant="success" label="success" hasPrefix inputPrefix="prefix" />
      <Input variant="warning" label="warning" hasPrefix inputPrefix="prefix" />
      <Input variant="error" label="error" hasPrefix inputPrefix="prefix" />
    </div>
  ),
};

export const SuffixInput: Story = {
  render: () => (
    <div className="flex flex-col gap-10 mt-10">
      <Input variant="ghost" label="ghost" hasSuffix inputSuffix="suffix" />
      <Input variant="primary" label="primary" hasSuffix inputSuffix="suffix" />
      <Input
        variant="secondary"
        label="secondary"
        hasSuffix
        inputSuffix="suffix"
      />
      <Input variant="accent" label="accent" hasSuffix inputSuffix="suffix" />
      <Input variant="info" label="info" hasSuffix inputSuffix="suffix" />
      <Input variant="success" label="success" hasSuffix inputSuffix="suffix" />
      <Input variant="warning" label="warning" hasSuffix inputSuffix="suffix" />
      <Input variant="error" label="error" hasSuffix inputSuffix="suffix" />
    </div>
  ),
};

export const PrefixAndSuffixInput: Story = {
  render: () => (
    <div className="flex flex-col gap-10 mt-10">
      <Input
        variant="primary"
        label="primary"
        hasSuffix
        hasPrefix
        inputPrefix="prefix"
        inputSuffix="suffix"
      />
      <Input
        variant="secondary"
        label="secondary"
        hasSuffix
        hasPrefix
        inputPrefix="prefix"
        inputSuffix="suffix"
      />
      <Input
        variant="accent"
        label="accent"
        hasSuffix
        hasPrefix
        inputPrefix="prefix"
        inputSuffix="suffix"
      />
      <Input
        variant="info"
        label="info"
        hasSuffix
        hasPrefix
        inputPrefix="prefix"
        inputSuffix="suffix"
      />
      <Input
        variant="success"
        label="success"
        hasSuffix
        hasPrefix
        inputPrefix="prefix"
        inputSuffix="suffix"
      />
      <Input
        variant="warning"
        label="warning"
        hasSuffix
        hasPrefix
        inputPrefix="prefix"
        inputSuffix="suffix"
      />
      <Input
        variant="error"
        label="error"
        hasSuffix
        hasPrefix
        inputPrefix="prefix"
        inputSuffix="suffix"
      />
    </div>
  ),
};
