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
    type: "spinner" || "ring" || "dots",
  },
  render: (args) => <Loading {...args}> loading </Loading>,
  decorators: [withTests({ results })],
};

export const SpinnerLoading: Story = {
  parameters: {
    toolbar: { show: false },
  },
  render: () => (
    <>
      <Loading type="spinner" componentSize="tiny" />
      <Loading type="spinner" componentSize="small" />
      <Loading type="spinner" componentSize="normal" />
      <Loading type="spinner" componentSize="large" />
    </>
  ),
};

export const RingLoading: Story = {
  render: () => (
    <>
      <Loading componentSize="tiny" type="ring" />
      <Loading componentSize="small" type="ring" />
      <Loading componentSize="normal" type="ring" />
      <Loading componentSize="large" type="ring" />
    </>
  ),
};

export const DotsLoading: Story = {
  render: () => (
    <>
      <Loading componentSize="tiny" type="dots" />
      <Loading componentSize="small" type="dots" />
      <Loading componentSize="normal" type="dots" />
      <Loading componentSize="large" type="dots" />
    </>
  ),
};

export const SpinnerWithColors: Story = {
  render: () => (
    <>
      <Loading type="spinner" variant="neutral" />
      <Loading type="spinner" variant="primary" />
      <Loading type="spinner" variant="secondary" />
      <Loading type="spinner" variant="accent" />
      <Loading type="spinner" variant="success" />
      <Loading type="spinner" variant="info" />
      <Loading type="spinner" variant="warning" />
      <Loading type="spinner" variant="error" />
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

export const DotsWithColors: Story = {
  render: () => (
    <>
      <Loading componentSize="normal" type="dots" variant="neutral" />
      <Loading componentSize="normal" type="dots" variant="primary" />
      <Loading componentSize="normal" type="dots" variant="secondary" />
      <Loading componentSize="normal" type="dots" variant="accent" />
      <Loading componentSize="normal" type="dots" variant="success" />
      <Loading componentSize="normal" type="dots" variant="info" />
      <Loading componentSize="normal" type="dots" variant="warning" />
      <Loading componentSize="normal" type="dots" variant="error" />
    </>
  ),
};
