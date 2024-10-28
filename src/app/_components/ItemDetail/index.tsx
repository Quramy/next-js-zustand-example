import { findItem, useStore } from "../../store";

type Props = {
  readonly id: string;
};

export function ItemDetail({ id }: Props) {
  const updateItem = useStore((state) => state.completeItem);
  const item = useStore(findItem(id));
  return (
    <div>
      <p>{item.message}</p>
      <button onClick={() => updateItem(id)}>Done</button>
    </div>
  );
}
