import React, { useReducer, useContext, Dispatch } from "react";

import { cartReducer } from "./cartReducer";
export const initialState = {
  pokemon: {
    id: "001",
    key: "001-Bulbasaur",
    src: "001-Bulbasaur.png",
    name: "Bulbasaur",
    description:
      "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
    price: "100.00",
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
