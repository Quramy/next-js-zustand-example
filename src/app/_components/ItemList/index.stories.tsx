import type { Meta, StoryObj } from "@storybook/react";
import { ItemList } from ".";

const meta = {
  component: ItemList,
} satisfies Meta<typeof ItemList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const ManyItems = {
  parameters: {
    initialState: {
      items: [...new Array(10).keys()].map((_, i) => ({
        id: `item:${i}`,
        message: `message: ${i + 1}`,
        completed: true,
      })),
    },
  },
} satisfies Story;
