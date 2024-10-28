import type { Preview } from "@storybook/react";

import "../src/app/globals.css";

import { StoreDecorator } from "../src/app/_testing/storeHelper";

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [StoreDecorator],
} satisfies Preview;

export default preview;
