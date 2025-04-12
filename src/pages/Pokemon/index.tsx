import { useParams } from "react-router";
import useFetchPokemonData from "./hooks/useFetchPokemonData";

import Header from "./Header";
import Footer from "./Footer";
import Carousel from "./Carousel";

const Pokemon = () => {
  const { id } = useParams();
  const { data: pokemon, isLoading } = useFetchPokemonData(id ?? "1");

  if (!pokemon) return null;

  return (
    <section className='flex flex-col gap-5 relative'>
      <Header name={pokemon?.name} order={pokemon?.order} />
      <Carousel isLoading={isLoading} sprites={pokemon?.sprites} />
      <Footer pokemon={pokemon} />
    </section>
  );
};

export default Pokemon;
