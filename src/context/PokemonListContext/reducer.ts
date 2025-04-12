import {
  PokemonListContextAction,
  PokemonListContextActionType,
  PokemonListContextType,
} from "./types";

export const pokemonListReducer = (
  state: PokemonListContextType,
  action: PokemonListContextAction
) => {
  const { type, url } = action;
  switch (type) {
    case PokemonListContextActionType.SET_URL:
      return { ...state, url };
    default:
      return state;
  }
};
