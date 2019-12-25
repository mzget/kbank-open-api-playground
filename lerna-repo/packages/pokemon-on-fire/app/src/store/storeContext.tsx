import React, { useReducer, useContext } from "react";

import { cartReducer, initialState as cartInitState } from "./cartReducer";
import { appReducer, initialState as appInitState } from "./appReducer";
type CusttomDispatch = React.Dispatch<{ type: string; payload: any }>;
type Store = {
  appState: [any, CusttomDispatch];
  cartState: [any, CusttomDispatch];
};
const StoreContext = React.createContext<Store>({
  appState: [appInitState, Object.create(null)],
  cartState: [cartInitState, Object.create(null)]
});

const StoreProvider = ({ children }: any) => {
  const cartState = useReducer(cartReducer, cartInitState);
  const appState = useReducer(appReducer, appInitState);
  const contextValue = { appState, cartState };
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;

export const useStore = () => {
  const contextValue = useContext(StoreContext);
  return contextValue;
};
