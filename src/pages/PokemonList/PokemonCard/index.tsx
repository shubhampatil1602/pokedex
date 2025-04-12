import { Link } from "react-router";
import useFetchPokemonData from "../../Pokemon/hooks/useFetchPokemonData";

import PokemonCardShimmer from "../PokemonCardShimmer";
import { PokemonCardProps } from "./types";
import { getPokemonImages } from "../../Pokemon/utils";
import { POKEBALL } from "./constants";
import Header from "./Header";
import Footer from "./Footer";

const Pokemoncard = ({ url }: PokemonCardProps) => {
  const id = url.slice(0, -1).split("/").pop();

  const { data: pokemon, isLoading } = useFetchPokemonData(id ?? "1");
  const { name } = pokemon ?? {};

  const images = getPokemonImages(pokemon?.sprites);
  const image = images?.[0]?.image ?? POKEBALL;

  if (isLoading) {
    return <PokemonCardShimmer />;
  }
  return (
    <Link
      to={`/pokemon/${id}`}
      className='relative bg-gray-50 cursor-pointer flex-none overflow-hidden rounded-lg h-fit border border-gray-300 w-96 group'
    >
      <Header image={image} name={name ?? "Pokemon"} />
      <Footer pokemon={pokemon} />
    </Link>
  );
};

export default Pokemoncard;
