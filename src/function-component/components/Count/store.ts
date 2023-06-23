import { Action, Reducer } from "../../redux/types";

const initState = {
  value: 0,
};

const countReducer: Reducer<typeof initState> = (
  state = initState,
  action: Action
) => {
  switch (action.type) {
    case "increase": {
      return { ...state, count: state.value + action.payload };
    }

    case "decrease": {
      return { ...state, count: state.value - action.payload };
    }

    default: {
      return { ...state };
    }
  }
};

export default countReducer;
