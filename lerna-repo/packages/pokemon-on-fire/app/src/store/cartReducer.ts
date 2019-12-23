import { createAction } from "redux-actions";

export function cartReducer(
  state: any,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case BUY_POKEMON:
      return { ...state, pokemon: action.payload };

    case ADD_PARTNER_TRX:
      return { ...state, partnerTxnUid: action.payload };
    default:
      throw new Error();
  }
}

export const BUY_POKEMON = "BUY_POKEMON";
export const buyPokemon = createAction(BUY_POKEMON);

export const ADD_PARTNER_TRX = "OPEN_API/ADD_PARTNER_TRX";
export const addPartnerTrx = createAction(ADD_PARTNER_TRX);
