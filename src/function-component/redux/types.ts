import store from ".";

export type Action = {
  type?: string;
  payload?: any;
};

export type Reducer<S = any> = (prevState: S, action: Action) => S;
export type Store = typeof store;
export type RootState = ReturnType<Store["getState"]>;
