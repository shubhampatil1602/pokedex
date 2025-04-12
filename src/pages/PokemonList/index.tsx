import useFetchPaginatedPokemon from "./hooks/useFetchPaginatedPokemon";
import Pokemoncard from "./PokemonCard";
import Header from "./Header";

const PokemonList = () => {
  const { data, isLoading } = useFetchPaginatedPokemon();

  return (
    <section>
      <Header
        isLoading={isLoading}
        nextUrl={data?.next}
        prevUrl={data?.previous}
      />
      <div className='flex items-center flex-wrap gap-5 justify-center pb-0'>
        {data?.results.map((pokemon) => (
          <Pokemoncard key={pokemon.name} url={pokemon.url} />
        ))}
      </div>
    </section>
  );
};

export default PokemonList;
