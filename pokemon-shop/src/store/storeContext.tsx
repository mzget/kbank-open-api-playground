import React, { useReducer, useContext, Dispatch } from "react";

import { cartReducer } from "./cartReducer";
export const initialState = {
  pokemon: {
    id: "",
    key: "",
    src: "",
    name: "",
    description: "",
    price: "",
  },
};
const StoreContext = React.createContext<
  [any, React.Dispatch<{ type: string; payload: any }>]
>([initialState, Object.create(null)]);

const StoreProvider = ({ children }: any) => {
  const contextValue = useReducer(cartReducer, initialState);
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
