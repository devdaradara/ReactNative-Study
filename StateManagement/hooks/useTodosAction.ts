import { useMemo } from "react";
import { useSetRecoilState, useRecoilValue, useRecoilCallback } from "recoil";
import { nextTodoId, todosState } from "../atoms/todos";

export default function useTodosActions() {
  const set = useSetRecoilState(todosState);
  const add = useRecoilCallback(
    ({snapshat}) => async (text: string) => {
      const nextId = await snapshat.getPromise(nextTodoId);
      set((prevState) =>
        prevState.concat({
          id: nextId,
          text,
          done: false,
        }),
      );
    },
    [set],
  )
  
  return useMemo(
    () => ({
      add,
      remove: (id: number) =>
        set((prevState) => prevState.filter((todo) => todo.id !== id)),
      toggle: (id: number) =>
        set((prevState) =>
          prevState.map((todo) =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
          )
        ),
    }),
    [add, set],
  )
}