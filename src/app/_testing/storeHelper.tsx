import { Decorator } from "@storybook/react";
import { StoreProvider, type State } from "../store";

declare module "@storybook/csf" {
  interface Parameters {
    readonly initialState?: Partial<State>;
  }
}

export const StoreDecorator: Decorator = (Story, { parameters }) => {
  return (
    <StoreProvider initialState={parameters.initialState ?? {}}>
      <Story />
    </StoreProvider>
  );
};
