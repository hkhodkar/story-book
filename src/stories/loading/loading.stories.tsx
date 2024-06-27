import Loading from "./loading";
import { Meta, StoryObj } from "@storybook/react";
import { withTests } from "@storybook/addon-jest";
import results from "../../../.jest-test-results.json";
import React from "react";

const meta: Meta<typeof Loading> = {
  component: Loading,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      document.documentElement.classList.add("dark");
      return <Story />;
    },
  ],
};

export default meta;

type Story = StoryObj<typeof Loading>;

export const Tests: Story = {
  args: {
    componentSize: "large",
    variant: "accent",
    type: "spinner",
  },
  render: (args) => <Loading {...args}> loading </Loading>,
  decorators: [withTests({ results })],
};

export const LoadingSpinner: Story = {
  parameters: {
    toolbar: { show: false },
  },
  render: () => (
    <>
      <Loading componentSize="tiny" />
      <Loading componentSize="small" />
      <Loading componentSize="normal" />
      <Loading componentSize="large" />
    </>
  ),
};

export const LoadingRing: Story = {
  render: () => (
    <>
      <Loading componentSize="tiny" type="ring" />
      <Loading componentSize="small" type="ring" />
      <Loading componentSize="normal" type="ring" />
      <Loading componentSize="large" type="ring" />
    </>
  ),
};

export const SpinnerWithColors: Story = {
  render: () => (
    <>
      <Loading variant="neutral" />
      <Loading variant="primary" />
      <Loading variant="secondary" />
      <Loading variant="accent" />
      <Loading variant="success" />
      <Loading variant="info" />
      <Loading variant="warning" />
      <Loading variant="error" />
    </>
  ),
};

export const RingWithColors: Story = {
  render: () => (
    <>
      <Loading componentSize="normal" type="ring" variant="neutral" />
      <Loading componentSize="normal" type="ring" variant="primary" />
      <Loading componentSize="normal" type="ring" variant="secondary" />
      <Loading componentSize="normal" type="ring" variant="accent" />
      <Loading componentSize="normal" type="ring" variant="success" />
      <Loading componentSize="normal" type="ring" variant="info" />
      <Loading componentSize="normal" type="ring" variant="warning" />
      <Loading componentSize="normal" type="ring" variant="error" />
    </>
  ),
};
