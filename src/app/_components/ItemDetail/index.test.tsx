import { render, screen } from "@testing-library/react";
import { composeStory } from "@storybook/react";
import meta, * as stories from "./index.stories";
import { ItemDetail } from ".";

describe(ItemDetail, () => {
  test("works", async () => {
    // Arrange
    const TestingComponent = composeStory(stories.Default, {
      ...meta,
      parameters: {
        initialState: {
          items: [
            {
              id: "testing_item",
              message: "hogefuga",
              completed: false,
            },
          ],
        },
      },
    });

    // Act
    await render(<TestingComponent id="testing_item" />);

    // Asseert
    await expect(screen.getByText("hogefuga")).toBeInTheDocument();
  });
});
