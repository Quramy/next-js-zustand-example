import type { Meta, StoryObj } from "@storybook/react";
import { ItemDetail } from ".";

const meta = {
  component: ItemDetail,
  parameters: {
    initialState: {
      items: [{ id: "item01", message: "message", completed: false }],
    },
  },
  args: {
    id: "item01",
  },
} satisfies Meta<typeof ItemDetail>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
