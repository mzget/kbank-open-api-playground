import React, { useReducer, useContext, Dispatch } from "react";

import { cartReducer } from "./cartReducer";
export const initialState = {
  pokemon: {
    id: "025",
    key: "025-Pikachu",
    src: "025-Pikachu.png",
    name: "Pikachu",
    description:
      "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
    price: "1200.00"
  }
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
