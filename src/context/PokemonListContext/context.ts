import { createContext } from "react";
import { PokemonListContextDefaultValue } from "./types";
import { POKEMON_LIST_CREATE_CONTEXT_DEFAULT_VALUE } from "./initialState";

export const PokemonListContext = createContext<PokemonListContextDefaultValue>(
  POKEMON_LIST_CREATE_CONTEXT_DEFAULT_VALUE
);
