import { Dispatch } from "react";

export interface PokemonListContextType {
  url: string;
}

export enum PokemonListContextActionType {
  SET_URL = "SET_URL",
}

export interface PokemonListContextAction {
  // dispatch({ type: PokemonListContextActionType.SET_URL, url: url })
  url: string;
  type: PokemonListContextActionType;
}

export interface PokemonListContextDefaultValue {
  // const [state, dispatch] = ...
  state: PokemonListContextType;
  dispatch: Dispatch<PokemonListContextAction>;
}
