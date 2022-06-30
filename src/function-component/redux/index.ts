import { Reducer } from "./types";

export const createStore = <T extends Reducer>(
  reducer: T
): {
  subscribe: (listener: Function) => () => void;
  dispatch: (action: Parameters<T>[1]) => void;
  getState: () => Parameters<T>[0];
} => {
  let state = reducer(undefined, {});
  let listeners: Function[] = [];

  const subscribe = (listener: Function) => {
    listeners.push(listener);
    return () => listeners.filter((l) => l !== listener);
  };

  let dispatch = (action: Parameters<T>[1]) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  const getState = () => state;

  return { dispatch, subscribe, getState };
};
