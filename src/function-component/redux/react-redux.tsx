import { createContext, FC, useContext, useEffect, useState } from "react";
import { RootState, Store } from "./types";

const StoreContext = createContext<Store | null>(null);

export const Provider: FC<{ store: Store }> = ({ children, store }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const useSelector = (
  selector: <K extends keyof RootState>(state: RootState) => RootState[K]
) => {
  const store = useContext(StoreContext) as Store;
  const [value, setValue] = useState(selector(store.getState()));

  useEffect(() => {
    const listener = () => {
      setValue(selector(store?.getState()));
    };
    store.subscribe(listener);
    return () => {
      store.unsubscribe(listener);
    };
  }, []);

  return value;
};

export const useDispatch = () => {
  const store = useContext(StoreContext) as Store;

  return store.dispatch;
};
