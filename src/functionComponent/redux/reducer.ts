import { Action, Reducer } from "./types";

const initState = {
  count: 0,
};

export const reducer: Reducer = (state = initState, action: Action) => {
  switch (action.type) {
    case "increase": {
      return { ...state, count: state.count + action.payload };
    }

    case "decrease": {
      return { ...state, count: state.count - action.payload };
    }

    default: {
      return { ...state };
    }
  }
};
