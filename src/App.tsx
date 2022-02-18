import Count from "./functionComponent/components";
import { createStore } from "./functionComponent/redux";
import { Provider } from "./functionComponent/redux/react-redux";
import { reducer } from "./functionComponent/redux/reducer";

function App() {
  const store = createStore(reducer);

  return (
    <Provider store={store}>
      <Count />
    </Provider>
  );
}

export default App;
