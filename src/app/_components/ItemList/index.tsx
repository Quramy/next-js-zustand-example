import { memo } from "react";
import { useShallow } from "zustand/shallow";
import { useStore, getNotCompletedItems } from "../../store";

import { ItemDetail as _ItemDetail } from "../ItemDetail";

const ItemDetial = memo(_ItemDetail);

type Props = {};

export function ItemList({}: Props) {
  const items = useStore(useShallow(getNotCompletedItems()));
  if (!items.length) {
    return <div>No todos</div>;
  }
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <ItemDetial id={item.id} />
        </li>
      ))}
    </ul>
  );
}
