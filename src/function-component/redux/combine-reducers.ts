import { Action, Reducer } from "./types";

const combineReducers =
  <T extends Record<string, Reducer>, K extends keyof T>(slices: T) =>
  (prevState: Record<K, Parameters<T[K]>[0]>, action: Action) => {
    return Object.entries(slices).reduce(
      (prev, [key, reducer]) => ({
        ...prev,
        [key]: reducer(prev[key as K], action),
      }),
      prevState
    );
  };

export default combineReducers;
