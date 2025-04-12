import axios from "axios";
import type { Pokemon } from "./types";

export const fetchPokemonDataService = async (id: string) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  return await axios.get<Pokemon>(url);
};
