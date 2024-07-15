import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";

import Dialog from "./dialog";
import Button from "../button/button";

export default {
  component: Dialog,
  tags: ["autodocs"],
} as Meta;

type Story = StoryObj<typeof Dialog>;

export const test: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Open Dialog
        </button>
        <Dialog {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <p>This is a dialog</p>
          <Button
            onClick={() => setIsOpen(false)}
            variant="primary"
            className="mt-4  text-white p-2 rounded"
          >
            Close
          </Button>
        </Dialog>
      </div>
    );
  },
};
