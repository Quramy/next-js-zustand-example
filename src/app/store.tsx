"use client";

import { useRef, createContext, useContext, type ReactNode } from "react";
import { createStore, useStore as useZustandStore } from "zustand";

export type Item = {
  readonly id: string;
  readonly completed: boolean;
  readonly message: string;
};

export type State = {
  readonly seq: number;
  readonly items: readonly Item[];
};

export type Actions = {
  readonly addItem: (message: string) => void;
  readonly completeItem: (id: string) => void;
  readonly updateItem: (id: string, message: string) => void;
};

export const createStoreApi = (initialState: Partial<State> = {}) =>
  createStore<State & Actions>((set, get) => ({
    seq: 0,
    items: [],
    ...initialState,
    addItem: (message) =>
      set((state) => ({
        seq: state.seq + 1,
        items: [
          ...state.items,
          { id: `item:${state.seq}`, message, completed: false },
        ],
      })),
    completeItem: (id) => {
      set((state) => ({
        items: state.items.map((item) => {
          if (item.id !== id) return item;
          return {
            ...item,
            completed: true,
          };
        }),
      }));
    },
    updateItem: (id, message) => {
      set((state) => ({
        items: state.items.map((item) => {
          if (item.id !== id) return item;
          return {
            ...item,
            message,
          };
        }),
      }));
    },
  }));

export const getNotCompletedItems = () => (state: State) =>
  state.items.filter(({ completed }) => !completed);

export const findItem = (id: string) => (state: State) => {
  const found = state.items.find((item) => item.id === id);
  if (!found) {
    throw new Error("no item");
  }
  return found;
};

const context =
  createContext<ReturnType<typeof createStoreApi>>(createStoreApi());

export function StoreProvider({
  children,
  initialState = {},
}: {
  readonly initialState?: Partial<State>;
  readonly children: ReactNode;
}) {
  const storeApi = useRef(createStoreApi(initialState)).current;

  return <context.Provider value={storeApi}>{children}</context.Provider>;
}

export function useStore<T>(selector: (state: State & Actions) => T): T {
  const storeApi = useContext(context);
  return useZustandStore(storeApi, selector);
}
