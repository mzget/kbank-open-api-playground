import { createAction } from "redux-actions";

export function cartReducer(
  state: any,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case BUY_POKEMON:
      return { ...state, pokemon: action.payload };
    default:
      throw new Error();
  }
}

export const BUY_POKEMON = "BUY_POKEMON";
export const buyPokemon = createAction(BUY_POKEMON);
