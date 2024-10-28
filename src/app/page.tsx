"use client";

import { useState } from "react";

import { useStore } from "./store";
import { ItemList } from "./_components/ItemList";

export default function Home() {
  const [message, setMessage] = useState("");
  const addItem = useStore((state) => state.addItem);
  return (
    <div>
      <section>
        <h2>Todos</h2>
        <ItemList />
      </section>
      <form
        action={() => {
          setMessage("");
          addItem(message);
        }}
      >
        <input
          type="text"
          placeholder="Buy the milk"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Add todo item</button>
      </form>
    </div>
  );
}
