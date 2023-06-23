import { useState } from "react";
import store, { createStore } from "./function-component/redux";
import { Provider } from "./function-component/redux/react-redux";
import Count from "./function-component/components/Count";

function App() {
  return (
    <Provider {...{ store }}>
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
