// import Count from "./function-component/components";
import Count from "./class-component/components";
import { createStore } from "./function-component/redux";
import { Provider } from "./function-component/redux/react-redux";
import { reducer } from "./function-component/redux/reducer";

function App() {
  const store = createStore(reducer);

  return (
    <Provider store={store}>
      <Count />
    </Provider>
  );
}

export default App;
