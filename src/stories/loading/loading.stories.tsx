import { Loading } from "./loading";
import { Meta, StoryObj } from "@storybook/react";
import { withTests } from "@storybook/addon-jest";
import results from "../../../.jest-test-results.json";

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
    size: "large",
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
      <Loading size="tiny" />
      <Loading size="small" />
      <Loading size="normal" />
      <Loading size="large" />
    </>
  ),
};

export const LoadingRing: Story = {
  render: () => (
    <>
      <Loading size="tiny" type="ring" />
      <Loading size="small" type="ring" />
      <Loading size="normal" type="ring" />
      <Loading size="large" type="ring" />
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
      <Loading size="normal" type="ring" variant="neutral" />
      <Loading size="normal" type="ring" variant="primary" />
      <Loading size="normal" type="ring" variant="secondary" />
      <Loading size="normal" type="ring" variant="accent" />
      <Loading size="normal" type="ring" variant="success" />
      <Loading size="normal" type="ring" variant="info" />
      <Loading size="normal" type="ring" variant="warning" />
      <Loading size="normal" type="ring" variant="error" />
    </>
  ),
};
