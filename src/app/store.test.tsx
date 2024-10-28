import { createStoreApi, findItem, getNotCompletedItems } from "./store";

describe("store", () => {
  describe("addItem", () => {
    test("works", async () => {
      // Arrange
      const storeApi = createStoreApi({ items: [] });

      // Act
      storeApi.getState().addItem("test message");

      // Assert
      expect(storeApi.getState().items).toHaveLength(1);
      expect(storeApi.getState().items[0].message).toBe("test message");
    });
  });

  describe("completeItem action", () => {
    test("works", async () => {
      // Arrange
      const storeApi = createStoreApi({
        items: [{ id: "item01", message: "", completed: false }],
      });

      // Act
      storeApi.getState().completeItem("item01");

      // Assert
      expect(storeApi.getState().items[0]?.completed).toBe(true);
    });
  });
});

describe("selectors", () => {
  describe(findItem, () => {
    it("selects an item by id", () => {
      // Arrange
      const storeApi = createStoreApi({
        items: [{ id: "item01", message: "test message", completed: false }],
      });

      // Act
      const result = findItem("item01")(storeApi.getState());

      // Assert
      expect(result).toBeTruthy();
    });

    it("throw error if specified item does not exist", () => {
      // Arrange
      const storeApi = createStoreApi({ items: [] });

      // Act
      const act = () => findItem("item")(storeApi.getState())

      // Assert
      expect(act).toThrow();
    });
  });

  describe(getNotCompletedItems, () => {
    it("filters not completed items", () => {
      // Arrange
      const storeApi = createStoreApi({
        items: [
          { id: "item01", message: "test message", completed: true },
          { id: "item02", message: "test message", completed: false },
        ],
      });

      // Act
      const result = getNotCompletedItems()(storeApi.getState());

      // Assert
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe("item02");
    });
  });
});
