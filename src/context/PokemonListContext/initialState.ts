import {
  PokemonListContextDefaultValue,
  PokemonListContextType,
} from "./types";

export const POKEMON_LIST_CONTEXT_INITIAL_STATE: PokemonListContextType = {
  url: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=50",
};

export const POKEMON_LIST_CREATE_CONTEXT_DEFAULT_VALUE: PokemonListContextDefaultValue =
  {
    state: POKEMON_LIST_CONTEXT_INITIAL_STATE,
    dispatch: () => {},
  };
