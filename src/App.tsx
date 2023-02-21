import { useState } from "react";
import Count from "./function-component/components";
import { createStore } from "./function-component/redux";
import { Provider } from "./function-component/redux/react-redux";
import { reducer } from "./function-component/redux/reducer";

function App() {
  const store = createStore(reducer);

  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
}

export default App;

const Component = () => {
  const [state, setState] = useState(true);

  return (
    <>
      {state && <Count />}
      {state && <Count />}
      {!state && <Count />}
      <button onClick={() => setState((prev) => !prev)}>Click</button>
    </>
  );
};
