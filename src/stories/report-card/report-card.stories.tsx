import React from "react";
import ReportCard from "./report-card";
import { Meta, StoryObj } from "@storybook/react";
import { withTests } from "@storybook/addon-jest";
import results from "../../../.jest-test-results.json";

const meta: Meta = {
  component: ReportCard,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ReportCard>;

export const Tests: Story = {
  args: {
    componentSize: "large",
    variant: "accent",
  },
  render: (args) => (
    <ReportCard value="5412" title="Total" icon={<>$</>} {...args} />
  ),
  decorators: [withTests({ results })],
};

export const BrandColors: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ReportCard
        variant="primary"
        iconVariant="error"
        value="5412"
        title="Primary with error icon"
        icon={<>$</>}
      />
      <ReportCard
        variant="accent"
        iconVariant="warning"
        value="5412"
        title="Accent with warning icon"
        icon={<>$</>}
      />
      <ReportCard
        variant="secondary"
        iconVariant="primary"
        value="5412"
        title="Secondary with primary icon"
        icon={<>$</>}
      />
      <ReportCard
        variant="success"
        iconVariant="error"
        value="5412"
        title="Success with error icon"
        icon={<>$</>}
      />
      <ReportCard
        variant="warning"
        iconVariant="accent"
        value="5412"
        title="Warning with accent icon"
        icon={<>$</>}
      />
      <ReportCard
        variant="error"
        iconVariant="primary"
        value="5412"
        title="Error with primary icon"
        icon={<>$</>}
      />
    </div>
  ),
};

export const CardSize: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ReportCard
        variant="primary"
        iconVariant="error"
        value="5412"
        title="Tiny card"
        icon={<>$</>}
        componentSize="tiny"
      />
      <ReportCard
        variant="secondary"
        iconVariant="warning"
        value="5412"
        title="Small card"
        icon={<>$</>}
        componentSize="small"
      />
      <ReportCard
        variant="error"
        iconVariant="primary"
        value="5412"
        title="Normal card"
        icon={<>$</>}
        componentSize="normal"
      />
      <ReportCard
        variant="info"
        iconVariant="success"
        value="5412"
        title="Large card"
        icon={<>$</>}
        componentSize="large"
      />
    </div>
  ),
};
