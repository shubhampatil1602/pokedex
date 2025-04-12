import { useContext } from "react";
import { PokemonListContext } from "./context";

export const usePokemonListContext = () => useContext(PokemonListContext);
