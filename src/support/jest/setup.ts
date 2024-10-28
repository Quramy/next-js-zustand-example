import "@testing-library/jest-dom";

import { setProjectAnnotations } from "@storybook/nextjs";

import previewAnnotations from "../../../.storybook/preview";

const annotations = setProjectAnnotations([previewAnnotations]);

beforeAll(() => {
  annotations.beforeAll();
});

afterEach(() => {
  jest.restoreAllMocks();
});
