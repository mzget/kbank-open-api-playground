import { createAction } from "redux-actions";

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
export function cartReducer(
  state: any,
  action: { type: string; payload: any }
) {
  console.log(action);
  switch (action.type) {
    case BUY_POKEMON:
      return { ...state, pokemon: action.payload };

    default:
      throw new Error();
  }
}

export const BUY_POKEMON = "BUY_POKEMON";
export const buyPokemon = createAction(BUY_POKEMON);
