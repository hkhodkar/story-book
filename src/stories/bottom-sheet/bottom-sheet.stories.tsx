import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import BottomSheet from "./bottom-sheet";
import Button from "../button/button";

export default {
  component: BottomSheet,
  tags: ["autodocs"],
} as Meta;

type Story = StoryObj<typeof BottomSheet>;

export const Test: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Open Bottom Sheet
        </button>
        <BottomSheet {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <p>This is a bottom sheet</p>
          <Button
            variant="primary"
            onClick={() => setIsOpen(false)}
            className="mt-4 text-white p-2 rounded"
          >
            Close
          </Button>
        </BottomSheet>
      </div>
    );
  },
};
