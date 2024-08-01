import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import Badge from "./badge";

const meta: Meta = {
  component: Badge,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj;

export const test: Story = {
  render: (args) => (
    <Badge {...args}>{`${args["shape"] === "wide" ? "Badge" : "1"}`}</Badge>
  ),
};

export const BrandColors: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Badge variant="neutral">Badge</Badge>
      <Badge variant="primary">Badge</Badge>
      <Badge variant="secondary">Badge</Badge>
      <Badge variant="accent">Badge</Badge>
      <Badge variant="ghost">Badge</Badge>
    </div>
  ),
};

export const StateColors: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Badge variant="info">Badge</Badge>
      <Badge variant="success">Badge</Badge>
      <Badge variant="warning">Badge</Badge>
      <Badge variant="error">Badge</Badge>
    </div>
  ),
};

export const CircleBrandsColors: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Badge shape="circle" variant="neutral">
        1
      </Badge>
      <Badge shape="circle" variant="primary">
        2
      </Badge>
      <Badge shape="circle" variant="secondary">
        3
      </Badge>
      <Badge shape="circle" variant="accent">
        4
      </Badge>
      <Badge shape="circle" variant="ghost">
        5
      </Badge>
    </div>
  ),
};

export const CircleStateColors: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Badge shape="circle" variant="success">
        1
      </Badge>
      <Badge shape="circle" variant="info">
        2
      </Badge>
      <Badge shape="circle" variant="warning">
        3
      </Badge>
      <Badge shape="circle" variant="error">
        4
      </Badge>
    </div>
  ),
};

export const BadgeSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <Badge componentSize="tiny" variant="success">
          tiny
        </Badge>
        <Badge componentSize="small" variant="info">
          small
        </Badge>
        <Badge componentSize="normal" variant="warning">
          normal
        </Badge>
        <Badge componentSize="large" variant="error">
          large
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <Badge componentSize="tiny" shape="circle" variant="success">
          xs
        </Badge>
        <Badge componentSize="small" shape="circle" variant="info">
          s
        </Badge>
        <Badge componentSize="normal" shape="circle" variant="warning">
          md
        </Badge>
        <Badge componentSize="large" shape="circle" variant="error">
          lg
        </Badge>
      </div>
    </div>
  ),
};
