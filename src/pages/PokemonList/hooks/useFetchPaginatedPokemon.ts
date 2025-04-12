import { useQuery } from "@tanstack/react-query";
import { fetchPaginatedPokemon } from "../utils";
import { usePokemonListContext } from "../../../context/PokemonListContext/hooks";

const useFetchPaginatedPokemon = () => {
  const {
    state: { url },
  } = usePokemonListContext();
  return useQuery({
    queryKey: ["pokemon-list", url],
    queryFn: () => fetchPaginatedPokemon(url),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
};

export default useFetchPaginatedPokemon;
