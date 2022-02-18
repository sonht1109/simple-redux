import { createStore } from ".";

export type Action = {
  type?: string;
  payload?: any;
};

export type Reducer = (state: any, action: Action) => any;

export type Store = ReturnType<typeof createStore>;
