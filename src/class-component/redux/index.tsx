import React from "react";

const state = {};

const UPDATE_EVENT = "UPDATE";

const stateUpdateEvent = new CustomEvent(UPDATE_EVENT);

const updateState = (newState: any) => {
  Object.assign(state, newState);
  document.dispatchEvent(stateUpdateEvent);
};

export const defineInitState = updateState

export const injectStateForActions = (mapActionsToProps: {
  [key: string]: Function;
}) => {
  const modifiedActions: { [key: string]: Function } = {};
  for (const actionName in mapActionsToProps) {
    const action = mapActionsToProps[actionName];
    const returnAction = (...inputValue: any) => {
      const newState = action(state, ...inputValue);
      updateState(newState);
    };
    modifiedActions[actionName] = returnAction;
  }
  return modifiedActions;
};

export const connect = (
  mapState: Function,
  mapActions: { [key: string]: Function },
  Component: any
) =>
  class extends React.Component {
    actions = {};
    constructor(props: any) {
      super(props);
      this.state = mapState(state);
      this.actions = injectStateForActions(mapActions);
    }

    updateState = () => {
      // Do something with the Component before setState
      this.setState(mapState(state));
      // Do something with the Component after setState
    };

    componentDidMount() {
      document.addEventListener(UPDATE_EVENT, this.updateState);
    }

    componentWillUnmount() {
      document.removeEventListener(UPDATE_EVENT, this.updateState);
    }

    render() {
      return <Component {...this.state} {...this.props} {...this.actions} />;
    }
  };
